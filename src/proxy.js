import { NextResponse } from "next/server";

export function proxy(request) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/pt";
    return NextResponse.redirect(url, 308);
  }

  const headers = new Headers(request.headers);
  headers.set("x-site-lang", request.nextUrl.pathname.split("/")[1]);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/", "/pt/:path+", "/en/:path+"]
};
