import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-white hover:from-amber-400 hover:to-amber-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        md: "h-10 px-6",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
  href?: string;
  // Explicitly separate button and anchor props:
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  linkProps?: Omit<LinkProps, 'href'> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
  children: React.ReactNode;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    variant,
    size,
    asChild = false,
    href,
    buttonProps,
    linkProps,
    children,
    ...rest
  } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    // Render Next.js Link without nested <a>, pass only anchor props
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  if (asChild) {
    return (
      <Slot
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
        {...rest}
      >
        {children}
      </Slot>
    );
  }

  return (
    <button
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonProps}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
