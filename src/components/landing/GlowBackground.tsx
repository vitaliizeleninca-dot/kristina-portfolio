"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  className?: string;
}

export function GlowBackground({ className }: GlowBackgroundProps) {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const depth = Number(el.dataset.depth);
        el.style.transform = `translate3d(${x * depth}px, ${y * depth}px,0)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Base background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />

      {/* Cinematic light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />

      {/* Watercolor shapes */}

      <div
        data-depth="0.2"
        className="absolute top-20 left-10 w-[420px] h-[420px] opacity-40 animate-watercolor"
        style={{
          "--r": "-15deg",
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(212,175,55,0.28) 0%, rgba(219,203,170,0.18) 40%, transparent 75%)",
          borderRadius: "40% 60% 55% 45% / 50% 50% 50% 50%",
          filter: "blur(55px)",
        } as React.CSSProperties}
      />

      <div
        data-depth="0.4"
        className="absolute top-40 right-20 w-[520px] h-[520px] opacity-35 animate-watercolor"
        style={{
          "--r": "25deg",
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(168,184,200,0.32) 0%, rgba(168,184,200,0.12) 50%, transparent 75%)",
          borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
          filter: "blur(60px)",
        } as React.CSSProperties}
      />

      <div
        data-depth="0.6"
        className="absolute bottom-32 left-1/4 w-[460px] h-[460px] opacity-30 animate-watercolor"
        style={{
          "--r": "10deg",
          background:
            "radial-gradient(ellipse at 40% 60%, rgba(180,147,91,0.3) 0%, rgba(212,175,55,0.15) 45%, transparent 75%)",
          borderRadius: "45% 55% 50% 50% / 60% 40% 60% 40%",
          filter: "blur(55px)",
        } as React.CSSProperties}
      />

      <div
        data-depth="0.8"
        className="absolute bottom-20 right-1/3 w-[400px] h-[400px] opacity-25 animate-watercolor"
        style={{
          "--r": "-20deg",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(219,203,170,0.35) 0%, rgba(180,147,91,0.18) 40%, transparent 75%)",
          borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%",
          filter: "blur(50px)",
        } as React.CSSProperties}
      />

      <div
        data-depth="0.3"
        className="absolute top-1/3 left-1/3 w-[340px] h-[340px] opacity-20 animate-watercolor"
        style={{
          "--r": "35deg",
          background:
            "radial-gradient(ellipse at 45% 55%, rgba(168,184,200,0.25) 0%, rgba(168,184,200,0.1) 50%, transparent 75%)",
          borderRadius: "60% 40% 50% 50% / 45% 55% 45% 55%",
          filter: "blur(45px)",
        } as React.CSSProperties}
      />

      {/* Breathing glow */}
      <div
        className="absolute top-0 left-1/4 w-[900px] h-[900px] rounded-full opacity-15 animate-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(180,147,91,0.12) 45%, transparent 75%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
