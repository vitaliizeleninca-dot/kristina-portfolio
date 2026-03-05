import { useState, useEffect } from "react";

export function AnimatedLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Цвета радуги для шариков (тема детства)
  const orbitColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
  ];

  // Увеличенный радиус, чтобы шарики летали вокруг эмблемы
  const orbitRadius = 240; 

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      
      {/* Стили для сложной анимации 3D-орбиты */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit3D {
          0% {
            transform: rotate(var(--start-angle)) translateX(${orbitRadius}px) rotate(calc(-1 * var(--start-angle))) scale(1.2);
            z-index: 20;
            opacity: 1;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: rotate(calc(var(--start-angle) + 180deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 180deg))) scale(0.6);
            z-index: 0;
            opacity: 0.4;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(${orbitRadius}px) rotate(calc(-1 * (var(--start-angle) + 360deg))) scale(1.2);
            z-index: 20;
            opacity: 1;
          }
        }

        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
      `}} />

      {/* Центральная эмблема (увеличенная) */}
      <div className="relative z-10 animate-[floatLogo_6s_easeInOut_infinite]">
        <img
          src="/logo-final.png"
          alt="Kristina Logo"
          className="w-56 md:w-72 lg:w-80 object-contain drop-shadow-[0_0_50px_rgba(180,147,91,0.4)]"
        />
        {/* Дополнительное мягкое свечение за логотипом */}
        <div className="absolute inset-0 bg-[#B4935B]/10 blur-[60px] rounded-full -z-10" />
      </div>

      {/* Орбитальные шарики */}
      {mounted &&
        orbitColors.map((color, index) => {
          const startAngle = (index / orbitColors.length) * 360;

          return (
            <div
              key={index}
              className="absolute w-8 h-8 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 40%, ${color}dd 100%)`,
                boxShadow: `0 0 25px ${color}aa, inset 0 0 10px rgba(255,255,255,0.5)`,
                top: "50%",
                left: "50%",
                marginTop: "-1rem", // центрирование
                marginLeft: "-1rem",
                /* Кастомные переменные для CSS анимации */
                //@ts-ignore
                "--start-angle": `${startAngle}deg`,
                animation: `orbit3D 12s linear infinite`,
                animationDelay: `${-index * (12 / orbitColors.length)}s`,
              }}
            />
          );
        })}
        
      {/* Декоративное фоновое кольцо (опционально, для эффекта глубины) */}
      <div className="absolute w-[480px] h-[480px] border border-[#B4935B]/5 rounded-full" />
    </div>
  );
}
