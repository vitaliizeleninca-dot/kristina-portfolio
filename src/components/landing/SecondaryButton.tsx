import * as React from "react";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "group relative px-8 py-3.5 font-montserrat font-semibold rounded-full overflow-hidden",
        "text-[#1a2838] border-2 border-[#1a2838]/60 bg-transparent",
        "hover:bg-gradient-to-br hover:from-[#1a2838] hover:to-[#0f1b2e] hover:text-white hover:border-[#1a2838]",
        "shadow-[0_2px_15px_rgba(26,40,56,0.2)]",
        "hover:shadow-[0_4px_25px_rgba(26,40,56,0.4),inset_0_0_20px_rgba(180,147,91,0.2)]",
        "hover:scale-105",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-[#1a2838] focus:ring-offset-2 focus:ring-offset-[#F9F7F2]",
        className
      )}
      {...props}
    >
      {/* Shine effect overlay - sweeping light */}
      <span 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                   opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full 
                   transition-all duration-700 ease-in-out"
        style={{ transform: "skewX(-20deg)" }}
      />
      
      {/* Border glow effect on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: "inset 0 0 20px rgba(180,147,91,0.25)" }} />
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
