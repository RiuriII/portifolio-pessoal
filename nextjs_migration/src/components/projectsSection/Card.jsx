const Card = ({ title, description }) => {
  return (
    <div className="z-20 flex w-full flex-col items-start text-white max-md:mt-10">
      <h1 className="self-start whitespace-nowrap p-4 text-center text-3xl font-medium max-sm:text-2xl">
        {title}
      </h1>
      <p className="w-[400px] p-4 text-justify text-base leading-8 max-sm:w-full">
        {description}
      </p>
    </div>
  );
};

export default Card;
