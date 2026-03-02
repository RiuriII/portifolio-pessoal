import ActionButtons from "./ActionButtons";

const Card = ({ title, description, index, buttons, downloads }) => {
  return (
    <div className="flex w-full flex-col items-start gap-5">
      <span
        className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-black leading-tight tracking-tight text-white"
        id={`project-${title.toLowerCase().replace(/\s+/g, "-")}-title`}
      >
        {title}
        <span className="text-purple-400" aria-hidden="true">
          .
        </span>
      </h3>

      <div
        className="h-px w-16 bg-gradient-to-r from-purple-400 to-transparent"
        aria-hidden="true"
      />

      <p className="max-w-[420px] text-base leading-8 text-white/60 max-sm:max-w-full">
        {description}
      </p>

      {downloads != null && (
        <div
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
          aria-label={`${downloads.toLocaleString("pt-BR")} instalações no VS Code Marketplace`}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>

          <span
            className="text-xs font-semibold text-white/60"
            aria-hidden="true"
          >
            {downloads.toLocaleString("pt-BR")} installs
          </span>
        </div>
      )}

      <ActionButtons buttons={buttons} />
    </div>
  );
};

export default Card;
