import Image from "next/image";

const icons = {
  git: "/images/github.svg",
  demo: "/images/externalLink.svg"
};

const typeStyle = {
  git: {
    base: "bg-purple-600 text-white border border-purple-500 hover:bg-purple-500 hover:border-purple-400",
    label: "GitHub"
  },
  demo: {
    base: "bg-white/5 text-white/80 border border-white/15 hover:bg-white/10 hover:border-white/30 hover:text-white",
    label: "Demo"
  }
};

function ActionButtons({ buttons }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {buttons.map((button, index) => {
        const style = typeStyle[button.type];
        return (
          <a
            key={index}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 ${style.base} ${button.width ?? ""}`}
          >
            <Image
              src={icons[button.type]}
              alt={`${style.label} icon`}
              width={20}
              height={20}
              className={`transition-transform duration-200 group-hover:scale-110 ${
                button.type === "demo"
                  ? "opacity-60 group-hover:opacity-100"
                  : ""
              }`}
            />
            {button.text}
          </a>
        );
      })}
    </div>
  );
}

export default ActionButtons;
