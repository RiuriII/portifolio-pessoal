import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riuri Dev",
  description: "Bem vindo ao meu portfólio",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
      sizes: "48x48"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
