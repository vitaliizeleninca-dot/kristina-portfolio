import * as React from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "group relative px-8 py-3.5 font-montserrat font-semibold text-white rounded-full overflow-hidden",
        "bg-gradient-to-br from-[#1a2838] to-[#0f1b2e]",
        "shadow-[0_4px_25px_rgba(26,40,56,0.4),0_0_20px_rgba(180,147,91,0.3)]",
        "hover:shadow-[0_6px_35px_rgba(26,40,56,0.6),0_0_30px_rgba(180,147,91,0.5)]",
        "hover:scale-105",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#1a2838] focus:ring-offset-2 focus:ring-offset-[#F9F7F2]",
        className
      )}
      {...props}
    >
      {/* Shine effect overlay - sweeping light */}
      <span 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                   -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{ transform: "skewX(-20deg)" }}
      />
      
      {/* Inner golden glow on hover */}
      <span className="absolute inset-0 bg-gradient-to-br from-[#B4935B]/0 via-[#D4AF37]/0 to-[#B4935B]/0
                       group-hover:from-[#B4935B]/20 group-hover:via-[#D4AF37]/10 group-hover:to-[#B4935B]/20
                       transition-all duration-300" />
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
