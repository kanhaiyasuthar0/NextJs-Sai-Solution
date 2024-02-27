import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // check whther trying to access api or not because it should always be opened
  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  //checking for public routes
  //   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  const isPublicRoute = publicRoutes.some(
    (route) =>
      nextUrl.pathname === route || nextUrl.pathname.startsWith(route + "/")
  );
  //checking for authenticated routes
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  console.log(
    "🚀 ~ auth ~ isAuthRoute:",
    nextUrl.pathname,
    isLoggedIn,
    req.auth
  );

  if (isApiRoute) {
    return null; // do not anything and let user access nextUrl.pathname
  }

  // chekcing if user comes on the login and is logged in or not
  if (isAuthRoute) {
    console.log("auth123");
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    // not logged in and not on public route
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  console.log("reached last");
  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
