import { useEffect } from "react";

export function AnimatedLogo() {
  const orbitColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
  ];

  const orbitRadius = 155;
  const duration = 12;

  // вставляем стили один раз
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes orbit3D_tight {
        0% {
          transform:
            translate(-50%, -50%)
            rotate(var(--start-angle))
            translateX(${orbitRadius}px)
            rotate(calc(-1 * var(--start-angle)))
            scale(1);
          z-index: 30;
          opacity: 1;
        }

        50% {
          transform:
            translate(-50%, -50%)
            rotate(calc(var(--start-angle) + 180deg))
            translateX(${orbitRadius}px)
            rotate(calc(-1 * (var(--start-angle) + 180deg)))
            scale(0.7);
          z-index: 0;
          opacity: 0.15;
        }

        100% {
          transform:
            translate(-50%, -50%)
            rotate(calc(var(--start-angle) + 360deg))
            translateX(${orbitRadius}px)
            rotate(calc(-1 * (var(--start-angle) + 360deg)))
            scale(1);
          z-index: 30;
          opacity: 1;
        }
      }

      @keyframes logoFloat {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }

      .animate-logo-float {
        animation: logoFloat 5s ease-in-out infinite;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-[350px] md:w-[450px] h-[350px] md:h-[450px] flex items-center justify-center">
      
      {/* Центральный логотип */}
      <div className="relative z-10 animate-logo-float">
        <img
          src="/logo-final.png"
          alt="Kristina Logo"
          className="w-56 md:w-64 lg:w-72 object-contain drop-shadow-[0_0_25px_rgba(180,147,91,0.2)]"
        />
      </div>

      {/* Орбитальные шарики */}
      {orbitColors.map((color, index) => {
        const startAngle = (index / orbitColors.length) * 360;

        return (
          <div
            key={index}
            className="absolute w-5 h-5 rounded-full"
            style={
              {
                background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 60%, ${color}dd 100%)`,
                boxShadow: `0 0 15px ${color}aa`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                "--start-angle": `${startAngle}deg`,
                animation: `orbit3D_tight ${duration}s linear infinite`,
                animationDelay: `${-index * (duration / orbitColors.length)}s`,
                willChange: "transform",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
