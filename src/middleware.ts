import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const allowedRoutes = ["/inicio", "/team"];
  const isStaticAsset =
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/static") ||
    url.pathname.match(/\.(.*)$/);

  const isAllowed = allowedRoutes.some((route) =>
    url.pathname.startsWith(route)
  );

  if (!isAllowed && !isStaticAsset) {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  return NextResponse.next();
}
