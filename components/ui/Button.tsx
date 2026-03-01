"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_self";
}

const variants = {
  primary:
    "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-300",
  secondary:
    "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300",
  ghost:
    "border border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20 transition-all duration-300",
  disabled:
    "border border-white/10 text-slate-500 cursor-not-allowed opacity-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled,
  type = "button",
  target,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold ${variants[disabled ? "disabled" : variant]} ${sizes[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
