import clsx from "clsx";

const buttonVariants = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary:
        "rounded-lg bg-white px-5 py-2.5 font-semibold text-black transition-all duration-200 hover:bg-gray-100",
      gradient:
        "w-full rounded-full cursor-pointer bg-gradient-to-r from-[#004aad] to-[#039da5]  text-white shadow-white/10 transition-all duration-200 hover:opacity-90 sm:w-auto",
      outline:
        "w-full rounded-full border-2 border-border-light bg-transparent font-semibold text-white transition-all duration-200 hover:border-white sm:w-auto",
      custom: "",
    },
    size: {
      default: "h-9 px-4 py-2 text-sm",
      sm: "h-8 rounded-md gap-1.5 text-xs  px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 text-base has-[>svg]:px-4",
      xl: "h-13 rounded-md px-6 text-lg has-[>svg]:px-4",
      dgLG: "px-8 py-4 text-lg font-semibold  shadow-2xl",
      dgSM: "px-5 py-2 text-base  shadow-lg",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
      custom: "",
    },
  },
};

function Button({ className, variant, size, children, ...props }) {
  return (
    <button
      className={clsx([
        className,
        "cursor-pointer flex gap-2 justify-center items-center",
        variant
          ? buttonVariants.variants.variant[variant]
          : buttonVariants.variants.variant["default"],
        size
          ? buttonVariants.variants.size[size]
          : buttonVariants.variants.size["default"],
      ])}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
