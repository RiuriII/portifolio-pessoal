"use client";
import Image from "next/image";
import { useState } from "react";
import Lottie from "react-lottie";

import AnimatePlane from "@/lottie/plane.json";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const clipboardEmail = () => {
    navigator.clipboard.writeText("riuriboneta@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  const optionsLottie = {
    loop: true,
    autoplay: true,
    animationData: AnimatePlane,
    rederSettings: {
      preserveAspectRadio: "xMidYMid slice"
    }
  };
  return (
    <section
      className="flex h-full min-h-[calc(100vh-5rem)] w-full scroll-mt-20 items-center justify-center space-x-8 bg-slate-50 py-8 text-blue max-md:flex-col max-md:space-x-0"
      id="contact"
    >
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden max-md:h-[300px]">
        <Lottie
          options={optionsLottie}
          width={700}
          height={700}
          isClickToPauseDisabled={true}
          ariaLabel="plane animation"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center space-y-8 max-md:w-full max-md:items-center max-md:space-y-4">
        <h2 className="self-stretch p-4 text-4xl font-bold text-slate-900 max-md:text-center max-md:text-2xl">
          Entre em contato comigo!
        </h2>
        <div className="relative ml-4 flex w-[400px] items-center space-x-4 rounded-lg border-[3px] border-solid border-purple-700 px-4 py-2 text-center max-md:max-w-full max-sm:ml-1 max-sm:max-w-[300px]">
          <button onClick={clipboardEmail} title="copiar email">
            <Image
              src="/images/copy.svg"
              alt="copy icon"
              width={40}
              height={40}
              className="h-10 w-10 max-md:h-8 max-md:w-8"
            />
          </button>

          <div className="my-auto border-l-[3px] border-purple-700 py-1 pl-2 text-lg font-semibold max-md:text-base">
            riuriboneta@gmail.com
          </div>
          <AnimatePresence>
            {isCopied && (
              <motion.div
                key="notification"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 60 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute -left-4 top-1 z-20 h-9 max-w-full transform rounded-lg bg-purple-700 px-4 py-2 text-base text-white max-sm:text-sm"
              >
                Copiado para a área de transferência!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
