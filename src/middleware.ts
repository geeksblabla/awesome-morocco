import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/open-source/:path*",
    "/blogs/:path*",
    "/podcasts/:path*",
    "/communities/:path*",
    "/events/:path*",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
