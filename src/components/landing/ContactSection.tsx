import { cn } from "@/lib/utils";
import { Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@khrystyna.art",
    href: "mailto:hello@khrystyna.art",
    external: false,
    hidden: true, // Email скрыт
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
          className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33]"
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
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.title}
                className={cn(
                  contact.hidden ? "hidden" : "flex",
                  "group flex-col items-center gap-3 p-8 rounded-2xl",

                  // glass
                  "bg-[#F9F7F2]/70 backdrop-blur-md",

                  // border
                  "border border-[#DBCBAA]/30",

                  // shadow
                  "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",

                  // hover
                  "hover:shadow-[0_12px_60px_rgba(180,147,91,0.18)]",
                  "hover:border-[#D4AF37]/50",
                  "hover:-translate-y-1 hover:scale-[1.04]",

                  // animation
                  "opacity-0 animate-fade-in-up",

                  "transition-all duration-300"
                )}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#0A1A33]/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#B4935B]" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-semibold text-sm text-[#0A1A33]">
                  {contact.title}
                </h3>

                {/* Value */}
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    aria-label={contact.title}
                    className="font-montserrat text-sm text-[#8B7355] hover:text-[#B4935B] transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-montserrat text-sm text-[#8B7355]">
                    {contact.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#DBCBAA]/30">
          <p className="font-montserrat text-xs text-[#8B7355]/60 tracking-wide">
            © 2026 Kristina ;D | Digital Artist — AURUM Project. All rights reserved
          </p>
        </div>

      </div>
    </section>
  );
}
