import * as React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { type LinkProps as NextLinkProps } from "next/link"

const linkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-primary underline-offset-4 hover:underline",
        defaultLinkButton:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium text-sm",
        destructiveLinkButton:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 font-medium text-sm",
        outlineLinkButton:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground font-medium text-sm",
        secondaryLinkButton:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 font-medium text-sm",
        ghostLinkButton: "hover:bg-accent hover:text-accent-foreground font-medium text-sm",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
    //   size: "default",
    },
  }
)

export interface LinkCustomProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
}

const LinkCustom = React.forwardRef<HTMLAnchorElement, LinkCustomProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Link
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkCustom.displayName = "LinkCustom"

export { LinkCustom, linkVariants }