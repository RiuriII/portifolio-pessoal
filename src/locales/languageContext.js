"use client";

import { createContext, useContext } from "react";
import { locales } from "./index";


const LanguageContext = createContext(null);

export function LanguageProvider({ langCode, children }) {
  return (
    <LanguageContext.Provider value={{ lang: locales[langCode], langCode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage precisa estar dentro de LanguageProvider");
  return ctx;
}
