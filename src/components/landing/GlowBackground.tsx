import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  className?: string;
}

export function GlowBackground({ className }: GlowBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Base background with uploaded image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/background.png')" }}
      />

      {/* Watercolor brush strokes - irregular shapes with soft edges */}
      <div
        className="absolute top-20 left-10 w-96 h-96 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(212,175,55,0.25) 0%, rgba(219,203,170,0.15) 40%, transparent 70%)",
          borderRadius: "40% 60% 55% 45% / 50% 50% 50% 50%",
          filter: "blur(40px)",
          transform: "rotate(-15deg)",
        }}
      />

      <div
        className="absolute top-40 right-20 w-[500px] h-[500px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(168,184,200,0.3) 0%, rgba(168,184,200,0.1) 50%, transparent 70%)",
          borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
          filter: "blur(50px)",
          transform: "rotate(25deg)",
        }}
      />

      <div
        className="absolute bottom-32 left-1/4 w-[450px] h-[450px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 40% 60%, rgba(180,147,91,0.28) 0%, rgba(212,175,55,0.12) 45%, transparent 70%)",
          borderRadius: "45% 55% 50% 50% / 60% 40% 60% 40%",
          filter: "blur(45px)",
          transform: "rotate(10deg)",
        }}
      />

      <div
        className="absolute bottom-20 right-1/3 w-[380px] h-[380px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(219,203,170,0.35) 0%, rgba(180,147,91,0.15) 40%, transparent 70%)",
          borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%",
          filter: "blur(40px)",
          transform: "rotate(-20deg)",
        }}
      />

      <div
        className="absolute top-1/3 left-1/3 w-[320px] h-[320px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 45% 55%, rgba(168,184,200,0.25) 0%, rgba(168,184,200,0.1) 50%, transparent 70%)",
          borderRadius: "60% 40% 50% 50% / 45% 55% 45% 55%",
          filter: "blur(35px)",
          transform: "rotate(35deg)",
        }}
      />

      {/* Animated radial glow - subtle movement */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-15 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(180,147,91,0.1) 40%, transparent 70%)",
          willChange: "opacity",
        }}
      />

      {/* Grain texture overlay for premium analog feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
