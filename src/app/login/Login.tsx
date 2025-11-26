"use client";

import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-[50%] bg-[#144E76] flex items-center justify-center p-6">
        <div className="w-full max-w-sm md:max-w-md">
          <Image
            src="/LegacyLogo.png"
            alt="Skyline Logo"
            width={220}
            height={100}
            priority
          />

          <LoginForm />

          <div className="text-center text-sm mt-6 text-gray-200">
            2025 © — By <span className="text-yellow-300">Simple Hunt</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%] relative h-[300px] md:h-full">
        <Image
          src="/loginimage.png"
          alt="Login Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
