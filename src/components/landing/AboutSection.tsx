import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-10 lg:px-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <article className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — Biography */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
              About the Artist
            </span>

            <h2
              id="about-heading"
              className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
              style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
            >
              Kristina ;D 🌸🌈
            </h2>

            <p className="mt-1 font-montserrat text-sm font-medium tracking-wide text-[#B4935B]">
              Digital Artist, Finland
            </p>

            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B4935B] rounded-full" />

            <div className="mt-6 space-y-4 font-montserrat text-base text-[#1A1A1A]/75 leading-relaxed max-w-xl">
              <p>
                Kristina is a digital artist whose practice unfolds at the intersection of artificial intelligence, memory, and contemporary visual culture. Through AI-generated imagery, music, and video, she explores questions of authorship, the symbolism of childhood, and emotionally charged narrative forms.
              </p>

              <p>
                She is a co-founder of <strong>🌸 Aurum: Childhood in Art 🌈</strong> — a collaborative art project and open platform for artistic research and experimentation, dedicated to childhood as a cultural, emotional, and conceptual phenomenon.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              {[
                { value: "1", label: "Exhibitions" },
                { value: "15+", label: "Artworks" },
                { value: "1", label: "Countries" },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="font-playfair font-bold text-3xl text-[#B4935B]">
                    {item.value}
                  </p>
                  <p className="mt-1 font-montserrat text-xs text-[#8B7355] tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className={cn(
                  "inline-block px-8 py-3 font-montserrat font-semibold text-sm text-white rounded-full",
                  "bg-gradient-to-br from-[#1a2838] to-[#0f1b2e]",
                  "shadow-[0_4px_25px_rgba(26,40,56,0.4),0_0_20px_rgba(180,147,91,0.3)]",
                  "hover:shadow-[0_6px_35px_rgba(26,40,56,0.6),0_0_30px_rgba(180,147,91,0.5)]",
                  "hover:scale-105",
                  "transition-all duration-300 ease-out"
                )}
              >
                Contact / Collaboration
              </a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              className={cn(
                "relative w-80 h-[440px] md:w-96 md:h-[520px] rounded-2xl overflow-hidden",
                "border border-[#DBCBAA]/40",
                "shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
                "transition-transform duration-500 hover:scale-[1.02]"
              )}
            >
              <img
                src="Kristina avatar.png"
                alt="Kristina ;D Digital Artist"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 30px rgba(180,147,91,0.15), inset 0 0 60px rgba(212,175,55,0.05)",
                }}
              />

              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg" />
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}
