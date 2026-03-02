import Link from "next/link";

// ✅ Fora do componente — não recria a cada render
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/RiuriII" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/riuri-alves-boneta/" }
];

const Footer = () => {
  return (
    <footer
      aria-label="Rodapé do site"
      className="relative w-full overflow-hidden bg-blue"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 p-6 md:px-16">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:items-center">
          <small className="text-sm text-white/50">
            © {new Date().getFullYear()} —{" "}
            <span className="text-sm font-black uppercase tracking-widest text-white/50">
              Riuri
              <span className="text-purple-500" aria-hidden="true">
                .
              </span>
              dev
            </span>
          </small>

          <nav aria-label="Links sociais">
            <ul role="list" className="flex gap-4">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (abre em nova aba)`}
                    className="focus-visible:ring-offset-blue-900 text-sm text-white/60 transition-colors hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
