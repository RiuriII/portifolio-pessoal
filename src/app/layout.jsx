import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Riuri Dev — Desenvolvedor web",
    template: "%s | Riuri Dev"
  },
  description:
    "Portfólio de Riuri, desenvolvedor web especializado em React, Next.js e Node.js.",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
      sizes: "48x48"
    }
  ],
  openGraph: {
    title: "Riuri Dev",
    description: "Desenvolvedor web — React, Next.js, Node.js",
    url: "https://riuridev.com",
    siteName: "Riuri Dev",
    images: [{ url: "/og_image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website"
  },
  // Indexação
  robots: {
    index: true,
    follow: true
  },

  // Canonical
  alternates: {
    canonical: "https://riuridev.com"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export const generatePersonJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riuri",
    url: "https://riuridev.com",
    jobTitle: "Desenvolvedor Web",
    knowsAbout: ["React", "Next.js", "Node.js"],
    sameAs: [
      "https://github.com/RiuriII",
      "https://www.linkedin.com/in/riuri-alves-boneta/"
    ]
  };
};

export default function RootLayout({ children }) {
  const personJsonLd = generatePersonJsonLd();
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd)
          }}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
