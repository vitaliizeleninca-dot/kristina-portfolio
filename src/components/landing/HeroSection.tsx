import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { AnimatedLogo } from "./AnimatedLogo";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
          
          {/* Left Content */}
          <div className="z-10 flex max-w-2xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            
            <h1
              className="animate-fade-in-up font-playfair text-5xl font-bold leading-[1.1] tracking-tight opacity-0 md:text-6xl lg:text-7xl xl:text-[80px]"
              style={{ animationDelay: "200ms", color: "#B4935B" }}
            >
              Childhood Magic <br />
              in Digital Colors
            </h1>

            <p
              className="mt-6 animate-fade-in-up font-montserrat text-lg font-bold leading-snug text-[#222] opacity-0 md:text-xl lg:text-[22px]"
              style={{ animationDelay: "300ms" }}
            >
              A journey into the world of warm memories and
              <br className="hidden md:block" />
              sincere dreams through the lens of modern art.
            </p>

            <p
              className="mt-4 max-w-lg animate-fade-in-up font-montserrat text-base leading-relaxed text-[#1A1A1A]/70 opacity-0"
              style={{ animationDelay: "400ms" }}
            >
              A special collection for Webbie Social. Exploring how technology
              helps us see the world through the eyes of a child again.
            </p>

            {/* CTA */}
            <div
              className="mt-10 flex flex-col gap-4 opacity-0 sm:flex-row animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <PrimaryButton onClick={() => scrollToSection("portfolio")}>
                View Gallery
              </PrimaryButton>

              <SecondaryButton onClick={() => scrollToSection("about")}>
                Artist Bio
              </SecondaryButton>
            </div>

            {/* Badge */}
            <div
              className="mt-12 flex items-center gap-3 animate-fade-in-up opacity-0"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex items-center gap-2 rounded-full border border-[#DBCBAA]/40 bg-[#0A1A33]/5 px-4 py-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
                <span className="font-montserrat text-xs font-medium uppercase tracking-wide text-[#0A1A33]/70">
                  Webbie Social — Featured Artist
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="flex w-full flex-1 items-center justify-center opacity-0 animate-fade-in-up lg:justify-end lg:pl-12"
            style={{ animationDelay: "600ms" }}
          >
            <div className="relative scale-125 transition-transform duration-500 md:scale-150 lg:scale-[1.75]">
              <AnimatedLogo />
            </div>
          </div>
        </div>
      </div>

      {/* Background Orb */}
      <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
    </section>
  );
}
