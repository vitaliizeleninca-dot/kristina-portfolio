import { useState } from "react";

export function AnimatedLogo() {
  const [mounted] = useState(true);

  // Rainbow colors for orbiting spheres
  const orbitColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
  ];

  const orbitRadius = 180; // радиус орбиты (можно увеличить)

  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

      {/* Central Logo */}
      <img
        src="/logo-final.png"
        alt="Webbie Social Logo"
        className="w-48 md:w-56 lg:w-64 object-contain drop-shadow-[0_0_40px_rgba(180,147,91,0.3)] animate-float-slow relative z-10"
      />

      {/* Orbiting Spheres */}
      {mounted &&
        orbitColors.map((color, index) => {
          const startAngle = (index / orbitColors.length) * 360;

          return (
            <div
              key={index}
              className="absolute w-6 h-6 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
                boxShadow: `0 0 20px ${color}88, 0 0 40px ${color}44`,
                top: "50%",
                left: "50%",
                transform: `rotate(${startAngle}deg) translateX(${orbitRadius}px)`,
                transformOrigin: "center",
                animation: "orbit 20s linear infinite",
                animationDelay: `${-index * (20 / orbitColors.length)}s`,
              }}
            />
          );
        })}
    </div>
  );
}
