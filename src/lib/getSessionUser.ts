"use client";

export const getSessionUser = () => {
  const fullName = sessionStorage.getItem("fullName") || "";
  const role = sessionStorage.getItem("role") || "";
  const id = sessionStorage.getItem("id") || "";
   const email = sessionStorage.getItem("email") || "";
    const phone = sessionStorage.getItem("phone") || "";

  return { fullName, role, id ,email,phone};
};