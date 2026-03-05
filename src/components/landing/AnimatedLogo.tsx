import { useState, useEffect } from "react";

export function AnimatedLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const orbitColors = [
    "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3",
  ];

  // МИНИМАЛЬНАЯ ОРБИТА: 155px
  // Это позволит шарикам кружиться вплотную к логотипу (w-72)
  const orbitRadius = 155; 

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit3D_tight {
          0% {
            transform: rotate(var(--start-angle)) translateX(${orbitRadius}px) rotate(calc(-1 * var(--start-angle))) scale(1);
            z-index: 30; 
            opacity: 1;
          }
          50% {
            transform: rotate(calc(var(--start-angle) + 180deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 180deg))) scale(0.7);
            z-index: 0; 
            opacity: 0.2;
          }
          100% {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 360deg))) scale(1);
            z-index: 30;
            opacity: 1;
          }
        }

        @keyframes floatLogoSimple {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}} />

      {/* Центральная эмблема */}
      <div className="relative z-10 animate-[floatLogoSimple_5s_easeInOut_infinite]">
        <img
          src="/logo-final.png"
          alt="Kristina Logo"
          className="w-56 md:w-64 lg:w-72 object-contain drop-shadow-[0_0_25px_rgba(180,147,91,0.2)]"
        />
      </div>

      {/* Орбитальные шарики (уменьшены до w-5 h-5 для аккуратности) */}
      {mounted &&
        orbitColors.map((color, index) => {
          const startAngle = (index / orbitColors.length) * 360;

          return (
            <div
              key={index}
              className="absolute w-5 h-5 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 60%, ${color}dd 100%)`,
                boxShadow: `0 0 15px ${color}aa`,
                top: "50%",
                left: "50%",
                marginTop: "-0.625rem", // центрирование w-5
                marginLeft: "-0.625rem",
                //@ts-ignore
                "--start-angle": `${startAngle}deg`,
                animation: `orbit3D_tight 10s linear infinite`, // чуть быстрее для динамики
                animationDelay: `${-index * (10 / orbitColors.length)}s`,
              }}
            />
          );
        })}
    </div>
  );
}
