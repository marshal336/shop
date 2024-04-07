import { NextResponse, NextRequest } from "next/server";
import { TOKEN } from "./enums/token";
import { PATH } from "./enums/paths";

export function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
  const token = cookies.get(TOKEN.ACCESS_TOKEN)?.value;
  const isProfilePage = url.includes("/profile");
  const isAuthPage = url.includes("/auth");

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(PATH.HOME, url));
  }
  if (isAuthPage) {
    return NextResponse.next();
  }
  if (!token && isProfilePage) {
    return NextResponse.redirect(new URL(PATH.AUTH_SIGN_UP, request.url));
  }

  return;
}

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
