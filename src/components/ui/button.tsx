import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary shadow-button hover:shadow-glow transform hover:-translate-y-1 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/50 text-primary bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent shadow-button hover:shadow-glow transform hover:-translate-y-1 hover:scale-105 font-semibold",
        hero: "bg-gradient-to-r from-accent via-primary to-accent text-white shadow-hero text-base font-semibold px-8 py-4 rounded-xl transform hover:-translate-y-2 hover:shadow-glow hover:scale-105",
        trust: "bg-gradient-to-r from-trust to-trust/80 text-trust-foreground hover:from-trust/90 hover:to-trust shadow-button hover:shadow-glow hover:scale-105"
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        xl: "h-14 px-8 py-4 text-base sm:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
