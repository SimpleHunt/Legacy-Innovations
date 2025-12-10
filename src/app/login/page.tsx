"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";


const images = [
  "/dd.png",
  "/hh.png",
  "/kk.png",
  "/loginimage.png",
];

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
   const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

 useEffect(() => {
  const interval = setInterval(() => {
    setFade(false); // start fade-out

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true); // fade-in new image
    }, 300);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  const router = useRouter(); 
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);


    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          loginUserId: formData.get("loginUserId"),
          password: formData.get("password"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setLoading(false);

      if (data.error) {
        setError(data.error);
        return;
      }

      if (!data.user) {
        setError("Invalid response from server");
        return;
      }

      
      sessionStorage.setItem("fullName", data.user.fullName ?? "");
      sessionStorage.setItem("role", data.user.role ?? "");
      sessionStorage.setItem("id", data.user.id ?? "");
      sessionStorage.setItem("email", data.user.email ?? "");
      sessionStorage.setItem("phone", data.user.phone ?? "");
    
      router.push("/dashboard");

    } catch (err) {
      setLoading(false);
      setError("Server error. Please try again.");
    }
  };
  


  return (
    <div className="h-screen w-full flex flex-row bg-[#144E76] ">
      {/* LOGIN CARD */}
      <div className="flex flex-col w-1/2  justify-center items-center bg-[#144E76]">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        {/* LOGO CENTERED */}
        <div className="flex justify-center mb-6">
          <Image
            src="/LegacyLogo.png"
            alt="Legacy Logo"
            width={200}
            height={110}
            priority
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* USER ID */}
          <div>
            <label className="text-gray-700 font-medium text-sm">Login User ID</label>
            <input
              name="loginUserId"
              type="text"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black"
              placeholder="Enter your User ID"
            />
          </div>

          {/* PASSWORD FIELD WITH TOGGLE */}
          <div className="relative">
            <label className="text-gray-700 font-medium text-sm">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black pr-10"
              placeholder="Enter password"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* ERROR MESSAGE */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="text-center text-xs mt-6 text-gray-600  border-t  flex items-center justify-center gap-2">
          2025 © — By <Image 
                src="/simpleHunt.png"
                alt="Simple Hunt Logo"
                width={150}
                height={100}
              />
        </div>
      </div>
       </div>
      {/* RIGHT-SIDE IMAGE */}
      <div className="hidden w-1/2 md:block md:w-[50%] h-full relative ml-10">
        <img
          src={images[index]}
          alt="Capsules Images"
          className= {`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default Login;