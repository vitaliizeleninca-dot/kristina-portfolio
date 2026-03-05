import { cn } from "@/lib/utils";
import { Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@khrystyna.art",
    href: "mailto:hello@khrystyna.art",
    external: false,
  },
  {
    icon: Instagram,
    title: "DM Instagram",
    value: "@aurumross",
    href: "https://www.instagram.com/aurumross/",
    external: true,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Espoo, Finland",
  },
  {
    icon: ExternalLink,
    title: "Exhibition",
    value: "Webbie Social",
    href: "https://webbiesocial.com/dashboard/aurumross",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
          Get in Touch
        </span>

        <h2
          className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
          style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
        >
          Contact
        </h2>

        <p className="mt-4 font-montserrat text-base text-[#1A1A1A]/60 max-w-2xl mx-auto leading-relaxed">
          If you are interested in collaborations, commissions, or exhibition
          inquiries, I'd love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={cn(
                  "flex flex-col items-center gap-3 p-8 rounded-2xl",
                  "bg-[#F9F7F2]/80 border border-[#DBCBAA]/30",
                  "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
                  "hover:shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
                  "hover:border-[#D4AF37]/40 hover:scale-105",
                  "transition-all duration-300"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-[#0A1A33]/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#B4935B]" />
                </div>

                <h3 className="font-montserrat font-semibold text-sm text-[#0A1A33]">
                  {item.title}
                </h3>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.title}
                    className="font-montserrat text-sm text-[#8B7355] hover:text-[#B4935B] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-montserrat text-sm text-[#8B7355]">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#DBCBAA]/30">
          <p className="font-montserrat text-xs text-[#8B7355]/60 tracking-wide">
            © 2026 Kristina ;D | Digital Artist — AURUM Collection. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
