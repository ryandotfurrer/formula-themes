import clsx from "clsx";

export type HeadingProps = {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

export const Heading = ({
  align = "left",
  children,
  level,
  size = "base",
}: HeadingProps) => {
  const HeadingTag = level;
  const headingClassNames = clsx(
    "font-bold",
    "text-foreground",
    "text-balance",
    {
      "text-4xl": size === "4xl",
      "text-3xl": size === "3xl",
      "text-2xl": size === "2xl",
      "text-xl": size === "xl",
      "text-lg": size === "lg",
      "text-base": size === "base",
      "text-sm": size === "sm",
    },
    {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    },
    {
      "tracking-tighter": size === "4xl" || size === "3xl" || size === "2xl",
      "tracking-tight": size === "xl" || size === "lg",
    },
  );
  return <HeadingTag className={headingClassNames}>{children}</HeadingTag>;
};