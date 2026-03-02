import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-heading"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-blue px-8 py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-800/10 blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        aria-hidden="true"
      >
        <span className="text-[clamp(12rem,30vw,22rem)] font-black leading-none text-white/[0.03]">
          404
        </span>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-16 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-[520px] flex-col items-start gap-6 max-md:items-center">
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-purple-400" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              Erro 404
            </span>
          </div>

          <h1
            id="not-found-heading"
            className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-none tracking-tight text-white max-md:text-center"
          >
            Página
            <br />
            <span className="text-purple-400">não encontrada</span>
            <span aria-hidden="true">.</span>
          </h1>

          <div
            className="h-px w-24 bg-gradient-to-r from-purple-400 to-transparent"
            aria-hidden="true"
          />

          <p className="text-lg leading-8 text-white/60 max-md:text-center">
            <span role="img" aria-label="rosto derretendo">
              🫠
            </span>{" "}
            Parece que você se perdeu pelo caminho. A página que você está
            procurando não existe.
          </p>

          <Link
            href="/"
            className="focus-visible:ring-offset-blue-900 group flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>

        <div className="relative flex w-full max-w-[460px] shrink-0 items-center justify-center max-md:max-w-[280px]">
          <div
            className="absolute inset-0 rounded-full bg-purple-500/15 blur-3xl"
            aria-hidden="true"
          />
          <Image
            src="/images/cat_404.png"
            alt="Gato confuso olhando para o lado, representando a página não encontrada"
            className="relative w-full object-contain drop-shadow-2xl"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-1/2 h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
        aria-hidden="true"
      />
    </main>
  );
}
