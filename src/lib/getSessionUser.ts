"use client";

export const getSessionUser = () => {
  const fullName = sessionStorage.getItem("fullName") || "";
  const role = sessionStorage.getItem("role") || "";
  const id = sessionStorage.getItem("id") || "";
<<<<<<< HEAD
   const email = sessionStorage.getItem("email") || "";
    const phone = sessionStorage.getItem("phone") || "";

  return { fullName, role, id ,email,phone};
=======

  return { fullName, role, id };
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
};