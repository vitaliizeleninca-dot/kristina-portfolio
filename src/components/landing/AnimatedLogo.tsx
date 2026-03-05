import { useState, useEffect } from "react";

export function AnimatedLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Цвета радуги
  const orbitColors = [
    "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3",
  ];

  // РАСЧЕТ: 195px — это идеальный баланс. 
  // Эмблема (~160px) + 35px свободного пространства.
  const orbitRadius = 195; 

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit3D {
          0% {
            transform: rotate(var(--start-angle)) translateX(${orbitRadius}px) rotate(calc(-1 * var(--start-angle))) scale(1.1);
            z-index: 30; 
            filter: blur(0px);
            opacity: 1;
          }
          50% {
            transform: rotate(calc(var(--start-angle) + 180deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 180deg))) scale(0.7);
            z-index: 0; 
            filter: blur(2px);
            opacity: 0.3;
          }
          100% {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 360deg))) scale(1.1);
            z-index: 30;
            filter: blur(0px);
            opacity: 1;
          }
        }

        @keyframes floatLogo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />

      {/* Центральная эмблема */}
      <div className="relative z-10 animate-[floatLogo_5s_easeInOut_infinite]">
        <img
          src="/logo-final.png"
          alt="Kristina Logo"
          // Контролируем размер эмблемы, чтобы она не "съела" орбиту
          className="w-52 md:w-64 lg:w-72 object-contain drop-shadow-[0_0_30px_rgba(180,147,91,0.3)]"
        />
      </div>

      {/* Орбитальные шарики */}
      {mounted &&
        orbitColors.map((color, index) => {
          const startAngle = (index / orbitColors.length) * 360;

          return (
            <div
              key={index}
              className="absolute w-6 h-6 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 50%, ${color}dd 100%)`,
                boxShadow: `0 0 20px ${color}88`,
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
                //@ts-ignore
                "--start-angle": `${startAngle}deg`,
                animation: `orbit3D 15s linear infinite`,
                animationDelay: `${-index * (15 / orbitColors.length)}s`,
              }}
            />
          );
        })}
    </div>
  );
}
