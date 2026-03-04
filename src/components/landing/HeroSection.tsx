import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { AnimatedLogo } from "./AnimatedLogo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            {/* Headline */}
            <h1
              className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1] tracking-tight opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "200ms",
                color: "#B4935B",
              }}
            >
              The Convergence of
              <br />
              Human Vision and
              <br />
              Machine Intelligence
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 font-montserrat font-bold text-lg md:text-xl lg:text-[22px] text-[#222222] leading-snug opacity-0 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              Showcasing digital artworks and AI-driven
              <br className="hidden md:block" /> explorations for the upcoming exhibition.
            </p>

            {/* Body Text */}
            <p
              className="mt-4 font-montserrat text-base text-[#1A1A1A]/70 leading-relaxed max-w-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Presenting a curated collection at the International Conference on
              Art & Machine Intelligence (ICAM) in Geneva. Where classical
              aesthetics meet generative algorithms.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <PrimaryButton onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View Gallery
              </PrimaryButton>
              <SecondaryButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Artist Bio
              </SecondaryButton>
            </div>

            {/* Exhibition Badge */}
            <div
              className="mt-12 flex items-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1A33]/5 border border-[#DBCBAA]/40">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-montserrat text-xs font-medium text-[#0A1A33]/70 tracking-wide uppercase">
                  ICAM Geneva 2025 — Exhibitor
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual - Animated Logo */}
          <div
            className="flex-1 w-full lg:pl-12 flex items-center justify-center lg:justify-end opacity-0 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
