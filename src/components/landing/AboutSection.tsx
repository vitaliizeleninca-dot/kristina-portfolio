import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Portrait */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div
              className={cn(
                "relative w-80 h-[440px] md:w-96 md:h-[520px] rounded-2xl overflow-hidden",
                "border border-[#DBCBAA]/40",
                "shadow-[0_8px_40px_rgba(180,147,91,0.15)]"
              )}
            >
              {/* Portrait placeholder - Unsplash artistic portrait */}
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80"
                alt="Khrystyna - AI Artist"
                className="w-full h-full object-cover"
              />

              {/* Golden border glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow:
                    "inset 0 0 30px rgba(180,147,91,0.15), inset 0 0 60px rgba(212,175,55,0.05)",
                }}
              />

              {/* Decorative corner accent */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg" />
            </div>
          </div>

          {/* Right - Biography */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
              About the Artist
            </span>
            <h2
              className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
              style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
            >
              Khrystyna
            </h2>
            <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B4935B] rounded-full" />

            <p className="mt-6 font-montserrat text-base text-[#1A1A1A]/75 leading-relaxed max-w-lg">
              A digital artist and AI researcher based in Europe, working at
              the intersection of classical aesthetics and generative
              algorithms. Her practice explores how machine intelligence can
              amplify—rather than replace—human creative vision.
            </p>

            <p className="mt-4 font-montserrat text-base text-[#1A1A1A]/75 leading-relaxed max-w-lg">
              With a background in fine art and computational design, Khrystyna
              creates works that bridge centuries of artistic tradition with
              cutting-edge AI models. Her pieces have been featured in digital
              art exhibitions across Europe and are part of the AURUM
              collection—a series dedicated to the golden thread connecting
              childhood wonder with artistic mastery.
            </p>

            <p className="mt-4 font-montserrat text-base text-[#1A1A1A]/75 leading-relaxed max-w-lg">
              She will be exhibiting new works at the International Conference
              on Art & Machine Intelligence (ICAM) in Geneva, 2025.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              <div className="text-center lg:text-left">
                <p className="font-playfair font-bold text-3xl text-[#B4935B]">
                  15+
                </p>
                <p className="mt-1 font-montserrat text-xs text-[#8B7355] tracking-wide uppercase">
                  Exhibitions
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-playfair font-bold text-3xl text-[#B4935B]">
                  200+
                </p>
                <p className="mt-1 font-montserrat text-xs text-[#8B7355] tracking-wide uppercase">
                  Artworks
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-playfair font-bold text-3xl text-[#B4935B]">
                  8
                </p>
                <p className="mt-1 font-montserrat text-xs text-[#8B7355] tracking-wide uppercase">
                  Countries
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className={cn(
                  "px-8 py-3 font-montserrat font-semibold text-sm text-white rounded-full",
                  "bg-gradient-to-br from-[#1a2838] to-[#0f1b2e]",
                  "shadow-[0_4px_25px_rgba(26,40,56,0.4),0_0_20px_rgba(180,147,91,0.3)]",
                  "hover:shadow-[0_6px_35px_rgba(26,40,56,0.6),0_0_30px_rgba(180,147,91,0.5)]",
                  "hover:scale-105",
                  "transition-all duration-300 ease-out"
                )}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
