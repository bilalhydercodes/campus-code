import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "purple" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: "arrow-pill" | "arrow-lime" | "none";
  children: React.ReactNode;
}

/**
 * CampusCode Standard CTA Button
 * Available as a native <button>, React Router <Link>, or external <a>.
 * Follows the high-contrast ink pill aesthetic with circular arrow icon badges.
 */
export function PrimaryButton({
  to,
  href,
  variant = "primary",
  size = "md",
  icon = "arrow-pill",
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-inter font-medium transition-all select-none cursor-pointer";

  const variantClasses = {
    primary:
      "bg-[#111111] text-white hover:bg-[#252525] shadow-xs active:scale-[0.99]",
    secondary:
      "bg-[#F2F2EE] text-[#111111] hover:bg-[#EAEAE5] border border-[#E0E0DA] active:scale-[0.99]",
    purple:
      "bg-[#7665FF] text-white hover:bg-[#6352F0] shadow-xs active:scale-[0.99]",
    outline:
      "bg-transparent text-[#111111] border border-[#111111]/20 hover:bg-[#111111]/[0.04] active:scale-[0.99]",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-[13px] rounded-full gap-2",
    md: "h-[42px] px-5 text-[13.5px] rounded-full gap-2.5",
    lg: "h-12 px-7 text-[15px] rounded-full gap-3",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon === "arrow-pill" && (
        <div
          className="flex items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
        >
          <ArrowUpRight size={25} className="w-[25px] h-[25px]" />
        </div>
      )}
      {icon === "arrow-lime" && (
        <span className="text-[#A8E62E] font-mono leading-none text-[15px] transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default PrimaryButton;
