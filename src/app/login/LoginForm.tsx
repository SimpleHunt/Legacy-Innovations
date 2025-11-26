"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const res = await loginAction(formData);

    if (res?.error) {
      setError(res.error);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-white text-sm">Login User ID</label>
        <input name="loginUserId" type="text" required className="w-full mt-1 px-3 py-2 rounded-md text-black" />
      </div>

      <div>
        <label className="text-white text-sm">Password</label>
        <input name="password" type="password" required className="w-full mt-1 px-3 py-2 rounded-md text-black" />
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
