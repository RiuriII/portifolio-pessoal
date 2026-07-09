// components/TerminalCard.jsx
"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/locales/languageContext";


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function TerminalCard() {
  const { lang } = useLanguage();
  
  const LINES = [
    { type: "cmd", text: "npx riuri-boneta@latest" },
    { type: "gap" },
    { type: "out", text: " " + lang.terminal.loading, color: "#6b7280" },
    { type: "gap" },
    { type: "raw", text: "{" },
    { type: "kv", key: "  nome", val: '"Riuri Boneta"', vc: "#86efac" },
    { type: "kv", key: "  role", val: `"${lang.terminal.role}"`, vc: "#86efac" },
    { type: "kv", key: "  stack", val: '["Next.js", "TypeScript", "Node.js", ...]', vc: "#7dd3fc" },
    { type: "kv", key: "  " + lang.terminal.available, val: "true", vc: "#fb923c" },
    { type: "kv", key: "  " + lang.terminal.writesTests, val: "true", vc: "#fb923c" },
    { type: "kv", key: "  " + lang.terminal.readsDocumentation, val: "true", vc: "#fb923c" },
    { type: "raw", text: "}" },
    { type: "gap" },
    { type: "out", text: lang.terminal.ready, color: "#28c840" },
  ];
  
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    let cancelled = false;

    async function run() {
      await sleep(800);

      for (const line of LINES) {
        if (cancelled) return;

        const p = document.createElement("p");
        p.style.cssText = "margin:0; font-size:13px; line-height:1.75; white-space:pre-wrap;";
        el.appendChild(p);
        el.scrollTop = el.scrollHeight;

        if (line.type === "gap") {
          p.innerHTML = " ";
          continue;
        }

        if (line.type === "cmd") {
          const prompt = document.createElement("span");
          prompt.style.color = "#a78bfa";
          prompt.textContent = "~ ❯ ";
          p.appendChild(prompt);
          const txt = document.createElement("span");
          txt.style.color = "#e2e8f0";
          p.appendChild(txt);
          for (const ch of line.text) {
            if (cancelled) return;
            txt.textContent += ch;
            await sleep(38);
          }
          await sleep(280);
          continue;
        }

        if (line.type === "kv") {
          const k = document.createElement("span");
          k.style.color = "#94a3b8";
          k.textContent = line.key + ": ";
          p.appendChild(k);
          const v = document.createElement("span");
          v.style.color = line.vc;
          p.appendChild(v);
          for (const ch of line.val + ",") {
            if (cancelled) return;
            v.textContent += ch;
            await sleep(11);
          }
          continue;
        }

        if (line.type === "raw") {
          p.style.color = "#e2e8f0";
          p.textContent = line.text;
          continue;
        }

        if (line.type === "out") {
          p.style.color = line.color;
          for (const ch of line.text) {
            if (cancelled) return;
            p.textContent += ch;
            await sleep(13);
          }
        }
      }

      if (!cancelled && el.lastElementChild) {
        const cursor = document.createElement("span");
        cursor.style.cssText =
          "display:inline-block;width:8px;height:13px;background:#a78bfa;vertical-align:text-bottom;margin-left:2px;animation:blink 1.1s step-end infinite;";
        el.lastElementChild.appendChild(cursor);
      }
    }

    if (!document.getElementById("term-blink")) {
      const s = document.createElement("style");
      s.id = "term-blink";
      s.textContent = "@keyframes blink{50%{opacity:0}}";
      document.head.appendChild(s);
    }

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      className="w-[480px] max-w-[90vw]"
      aria-label="Terminal mostrando informações sobre Riuri Boneta"
      role="region"
    >
      <div
        style={{ background: "#1a1a1e" }}
        className="flex items-center gap-2 rounded-t-xl border border-b-0 border-white/[0.07] px-4 py-2.5"
      >
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        <span className="mx-auto font-mono text-[11px] tracking-wider text-white/25">
          riuri@portfolio ~ zsh
        </span>
      </div>

      <div
        ref={bodyRef}
        style={{ background: "#0d0d0f", fontFamily: "var(--font-mono, monospace)" }}
        className="min-h-[180px] rounded-b-xl border border-white/[0.07] px-5 py-4"
      />
    </motion.div>
  );
}