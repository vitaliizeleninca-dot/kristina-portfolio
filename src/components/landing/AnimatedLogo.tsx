import { useState } from "react";

export function AnimatedLogo() {
  const [mounted] = useState(true);

  // Rainbow colors for 7 orbiting spheres
  const orbitColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
  ];

  return (
    <div className="relative w-full aspect-square max-w-2xl flex items-center justify-center">
      {/* Central logo with floating animation */}
      <img
        src="/logo-final.png"
        alt="Webbie Social Logo"
        className="w-3/5 h-auto object-contain drop-shadow-[0_0_40px_rgba(180,147,91,0.3)] animate-float-slow relative z-10"
      />

      {/* Orbiting rainbow spheres */}
      {mounted && orbitColors.map((color, index) => {
        const angle = (index / orbitColors.length) * 2 * Math.PI;
        const radius = 45; // percentage
        
        return (
          <div
            key={index}
            className="absolute w-6 h-6 rounded-full animate-orbit"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
              boxShadow: `0 0 20px ${color}88, 0 0 40px ${color}44`,
              left: '50%',
              top: '50%',
              animation: `orbit 20s linear infinite`,
              animationDelay: `${-index * (20 / orbitColors.length)}s`,
              '--orbit-radius': `${radius}%`,
              '--orbit-angle': `${angle}rad`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
