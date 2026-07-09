"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/locales/languageContext";

export function ResumeDropdown() {

  const { lang } = useLanguage();

  return (
    <details className="group relative inline-block">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 [&::-webkit-details-marker]:hidden">
        <Image
          src="/images/document.svg"
          alt={lang.home.resumeDropdown.iconAlt}
          aria-hidden="true"
          width={18}
          height={18}
          className="opacity-80 transition group-open:opacity-100 group-hover:opacity-100"
        />
        <span className="select-none">{lang.home.resumeDropdown.title}</span>
        <svg
          className="ml-1 h-4 w-4 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <div className="absolute left-0 top-full z-10 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-purple-400/20 bg-blue/95 backdrop-blur-xl invisible group-open:visible" >
        <Link
          href="/resume_pt.pdf"
          download="riuri-boneta-cv-pt.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Baixar currículo em Português"
          className="flex items-center gap-3 px-4 py-3 text-sm text-purple-200 transition-colors hover:bg-purple-500/15 hover:text-white focus-visible:bg-purple-500/15 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
          onClick={(e) => {
            e.currentTarget.closest("details")?.removeAttribute("open");
          }}
        >
          <span className="text-lg">🇧🇷</span>
          Português
        </Link>

        <Link
          href="/resume_en.pdf"
          download="riuri-boneta-cv-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume in English"
          className="flex items-center gap-3 border-t border-purple-400/10 px-4 py-3 text-sm text-purple-200 transition-colors hover:bg-purple-500/15 hover:text-white focus-visible:bg-purple-500/15 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
          onClick={(e) => {
            e.currentTarget.closest("details")?.removeAttribute("open");
          }}
        >
          <span className="text-lg">🇺🇸</span>
          English
        </Link>
      </div>
    </details>
  );
}