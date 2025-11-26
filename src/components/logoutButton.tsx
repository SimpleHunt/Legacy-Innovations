"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/logout");

    // redirect to login page
    window.location.href = "/";
  };

  return (
    <button onClick={handleLogout} className="flex items-center gap-2">
      <img src="/logout.png" className="w-5" />
      Logout
    </button>
  );
}