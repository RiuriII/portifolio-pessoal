import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-5xl px-8 max-[360px]:px-6 md:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MaxWidthWrapper;
