import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/locales/languageContext";
import { locales } from "@/locales";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });
const siteUrl = "https://riuridev.com";
const languageUrls = { "pt-BR": "/pt", en: "/en" };

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!locales[lang]) notFound();

  const content = locales[lang].metadata;
  const canonical = `${siteUrl}/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: content.title,
      template: "%s | Riuri Dev"
    },
    description: content.description,
    icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg", sizes: "48x48" }],
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      siteName: "Riuri Dev",
      images: [{ url: "/og_image.png", width: 1200, height: 630, alt: content.imageAlt }],
      locale: lang === "pt" ? "pt_BR" : "en_US",
      alternateLocale: lang === "pt" ? ["en_US"] : ["pt_BR"],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/og_image.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical,
      languages: languageUrls
    },
    verification: {
      google: "T01b17nlXVW3YVVsNa54ejD6WSpHfyxZZ7iMWvJAhN8"
    }
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1
};

function generatePersonJsonLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Riuri Boneta",
    description: locales[lang].metadata.personDescription,
    url: `${siteUrl}/${lang}`,
    jobTitle: locales[lang].metadata.jobTitle,
    knowsAbout: ["React", "Next.js", "Node.js"],
    sameAs: [
      "https://github.com/RiuriII",
      "https://www.linkedin.com/in/riuri-alves-boneta/"
    ]
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!locales[lang]) notFound();

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonJsonLd(lang)) }}
        />
        <LanguageProvider langCode={lang}>
          <main>{children}</main>
          <Footer langCode={lang} />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
