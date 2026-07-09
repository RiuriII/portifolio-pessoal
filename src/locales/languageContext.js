"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { locales } from "./index";


const LanguageContext = createContext(null);

export function LanguageProvider({ initialLang, children }) {
  const [langCode, setLangCode] = useState(initialLang);

  const setLanguage = useCallback((code) => {
    setLangCode(code);
    document.cookie = `language=${code}; path=/; max-age=31536000`;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang: locales[langCode], langCode, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage precisa estar dentro de LanguageProvider");
  return ctx;
}