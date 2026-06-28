import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn("button-link", `button-link--${variant}`, className)} {...props}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
