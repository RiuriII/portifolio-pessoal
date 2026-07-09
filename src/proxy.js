import {  NextResponse } from "next/server";

const SUPPORTED = ["pt", "en"];

export function proxy(request) {
  const response = NextResponse.next();

  const cookieLang = request.cookies.get("language")?.value;
  if (cookieLang && SUPPORTED.includes(cookieLang)) return response;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const lang = acceptLanguage.toLowerCase().includes("pt") ? "pt" : "en";

  response.cookies.set("language", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};