"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, Suspense } from "react";

import { fadeUp } from "@/lib/utils";
import AnimatePlane from "@/lottie/plane.json";
import { motion, AnimatePresence } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const EMAIL = "riuriboneta@gmail.com";

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const clipboardEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] w-full scroll-mt-20 items-center justify-center overflow-hidden bg-slate-50 py-16"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-purple-300/40 blur-3xl" />
        <div className="bg-blue-100/30 absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full items-center gap-8 px-8 max-md:flex-col md:px-16">
        {/* Lottie plane */}
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden max-md:h-[280px]">
          <Suspense fallback={null}>
            <Lottie
              animationData={AnimatePlane}
              loop={true}
              autoplay={true}
              style={{ width: 680, height: 680 }}
              aria-hidden="true"
            />
          </Suspense>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-6 max-md:items-center">
          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-500">
              Contato
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            {...fadeUp(0.2)}
            id="contact-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-slate-900 max-md:text-center"
          >
            Vamos conversar
            <span className="text-purple-500" aria-hidden="true">
              .
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35
            }}
            className="h-px w-20 bg-gradient-to-r from-purple-500 to-transparent"
            aria-hidden="true"
          />

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.4)}
            className="max-w-[375px] text-base leading-7 text-slate-500 max-md:text-center"
          >
            Aberto a oportunidades, freelas ou só uma boa conversa sobre
            tecnologia. Me manda um e-mail!
          </motion.p>

          {/* Email copy card */}
          <motion.div
            {...fadeUp(0.5)}
            className="relative w-full max-w-[400px]"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-purple-200 bg-white px-4 py-3 shadow-md shadow-purple-100 transition-shadow hover:shadow-lg hover:shadow-purple-100">
              {/* Copy button */}
              <button
                onClick={clipboardEmail}
                aria-describedby="copy-feedback"
                aria-label={
                  isCopied ? "E-mail copiado!" : "Copiar endereço de e-mail"
                }
                className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 transition-colors hover:bg-purple-100"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text*/}
                <Image
                  src="/images/copy.svg"
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                />
              </button>

              {/* Divider */}
              <div
                className="h-6 w-px shrink-0 bg-purple-200"
                aria-hidden="true"
              />

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-semibold text-slate-700 max-sm:text-xs"
              >
                {EMAIL}
              </a>
              <span aria-live="polite" aria-atomic="true" className="sr-only">
                {isCopied ? "E-mail copiado para a área de transferência!" : ""}
              </span>

              {/* Animated feedback — inside the card, right side */}
              <AnimatePresence>
                {isCopied && (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto shrink-0 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white"
                    aria-hidden="true"
                  >
                    Copiado ✓
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right number decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="block translate-x-6 translate-y-6 text-[18rem] font-black leading-none text-slate-900/[0.03]">
          04
        </span>
      </div>
    </section>
  );
};

export default ContactSection;
