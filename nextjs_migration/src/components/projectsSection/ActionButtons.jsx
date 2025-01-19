function ActionButtons({ buttons }) {
  const typeStyle = {
    git: "bg-purple-700 relative block overflow-hidden  transition-all duration-300 ease-out before:absolute before:top-0 before:left-1/2 before:w-4 before:h-60 before:bg-white before:opacity-10 before:transition-transform before:duration-1000 before:transform before:translate-x-12 before:rotate-12 hover:before:-translate-x-40",
    demo: "border-purple-700  border-[3px] block relative z-0   overflow-hidden before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-purple-700 before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-vanilla hover:before:translate-x-[0%] hover:before:translate-y-[0%] hover:border-none active:scale-95"
  };

  return (
    <div className="ml-4 mt-7 flex w-[319px] max-w-full gap-5 whitespace-nowrap text-center text-2xl tracking-wider max-md:ml-2.5 max-sm:w-full max-[320px]:w-[290px]">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.url}
          target="_blank"
          className={`z-20 flex max-h-12 min-h-12 ${button.width ? button.width : "w-[120px]"} items-center justify-center self-stretch rounded-md px-4 py-2 text-xl transition duration-300 ease-in-out ${typeStyle[button.type]} max-[400px]:text-base`}
        >
          {button.text}
        </a>
      ))}
    </div>
  );
}

export default ActionButtons;
