import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value;
  const userId = req.cookies.get("userId")?.value;

  const path = req.nextUrl.pathname;

  const isAuthPage = path.startsWith("/login");

  // If user is not logged in and trying to access protected pages → redirect to login
  if (!userId && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // IF already logged in and tries to go to login page → redirect to dashboard
  if (userId && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/factory/:path*",
    "/superadmin/:path*",
    "/customer/:path*",
    "/login",
  ],
};