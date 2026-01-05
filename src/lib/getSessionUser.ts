export function getSessionUser() {
  if (typeof window === "undefined") return null;

  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");

  if (!id || !role) return null;

  return {
    id,
    role,
    fullName: localStorage.getItem("fullName"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("phone"),
  };
}
