export function GlowOrb() {
  // Rainbow colors for the 7 spheres
  const rainbowColors = [
    { color: '#FF0000', shadow: 'rgba(255, 0, 0, 0.6)' },     // Red
    { color: '#FF7F00', shadow: 'rgba(255, 127, 0, 0.6)' },   // Orange
    { color: '#FFFF00', shadow: 'rgba(255, 255, 0, 0.6)' },   // Yellow
    { color: '#00FF00', shadow: 'rgba(0, 255, 0, 0.6)' },     // Green
    { color: '#0000FF', shadow: 'rgba(0, 0, 255, 0.6)' },     // Blue
    { color: '#4B0082', shadow: 'rgba(75, 0, 130, 0.6)' },    // Indigo
    { color: '#9400D3', shadow: 'rgba(148, 0, 211, 0.6)' },   // Violet
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main container */}
      <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
        
        {/* Subtle golden glow behind the sculpture */}
        <div
          className="absolute inset-0 rounded-full animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(180,147,91,0.08) 40%, transparent 70%)",
            willChange: "opacity",
          }}
        />

        {/* Hero Sculpture Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/hero-sculpture.png"
            alt="Aurum Hero Sculpture"
            className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(180,147,91,0.3)] animate-float"
            style={{
              animationDuration: "6s",
              willChange: "transform",
            }}
          />
        </div>

        {/* 7 Rainbow Spheres orbiting around the logo */}
        {rainbowColors.map((sphere, index) => {
          const angle = (index * 360) / 7; // Distribute evenly in a circle
          const radius = 220; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={index}
              className="absolute w-12 h-12 rounded-full animate-float"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                backgroundColor: sphere.color,
                boxShadow: `0 0 20px ${sphere.shadow}, 0 0 40px ${sphere.shadow}`,
                animationDelay: `${index * 0.2}s`,
                animationDuration: '4s',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
