import { cn } from "@/lib/utils";
import { Mail, MapPin, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
          Get in Touch
        </span>
        <h2
          className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
          style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
        >
          Contact
        </h2>
        <p className="mt-4 font-montserrat text-base text-[#1A1A1A]/60 max-w-lg mx-auto leading-relaxed">
          Interested in collaborations, commissions, or exhibition inquiries?
          I'd love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            className={cn(
              "flex flex-col items-center gap-3 p-8 rounded-2xl",
              "bg-[#F9F7F2]/80 border border-[#DBCBAA]/30",
              "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
              "hover:shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
              "hover:border-[#D4AF37]/40",
              "transition-all duration-300"
            )}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A1A33]/5 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#B4935B]" />
            </div>
            <h3 className="font-montserrat font-semibold text-sm text-[#0A1A33]">
              Email
            </h3>
            <p className="font-montserrat text-sm text-[#8B7355]">
              hello@khrystyna.art
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center gap-3 p-8 rounded-2xl",
              "bg-[#F9F7F2]/80 border border-[#DBCBAA]/30",
              "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
              "hover:shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
              "hover:border-[#D4AF37]/40",
              "transition-all duration-300"
            )}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A1A33]/5 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#B4935B]" />
            </div>
            <h3 className="font-montserrat font-semibold text-sm text-[#0A1A33]">
              Location
            </h3>
            <p className="font-montserrat text-sm text-[#8B7355]">
              Geneva, Switzerland
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center gap-3 p-8 rounded-2xl",
              "bg-[#F9F7F2]/80 border border-[#DBCBAA]/30",
              "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
              "hover:shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
              "hover:border-[#D4AF37]/40",
              "transition-all duration-300"
            )}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A1A33]/5 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#B4935B]" />
            </div>
            <h3 className="font-montserrat font-semibold text-sm text-[#0A1A33]">
              Exhibition
            </h3>
            <p className="font-montserrat text-sm text-[#8B7355]">
              ICAM Geneva 2025
            </p>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t border-[#DBCBAA]/30">
          <p className="font-montserrat text-xs text-[#8B7355]/60 tracking-wide">
            © 2025 Khrystyna | AI Artist — AURUM Collection. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
