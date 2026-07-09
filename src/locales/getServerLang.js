import { cookies } from "next/headers";
import { locales } from "./index";

export async function getServerLang() {
  const cookieStore = await cookies();
  const langCode = cookieStore.get("language")?.value === "en" ? "en" : "pt";
  return locales[langCode];
}