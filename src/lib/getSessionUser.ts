"use client";

export const getSessionUser = () => {
  const fullName = sessionStorage.getItem("fullName") || "";
  const role = sessionStorage.getItem("role") || "";
  const id = sessionStorage.getItem("id") || "";

  return { fullName, role, id };
};