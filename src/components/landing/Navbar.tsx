import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Exhibitions", href: "#exhibitions" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  animationDelay?: number;
}

export function Navbar({ animationDelay = 0 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Функция для возврата наверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false); // Закрываем меню на мобилках при клике
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-10 lg:px-16 flex items-center justify-between transition-all duration-300",
        "opacity-0 animate-fade-in-up",
        isScrolled
          ? "bg-[#F9F7F2]/85 backdrop-blur-lg border-b border-[#DBCBAA]/30 shadow-sm"
          : "bg-transparent"
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Logo - Теперь это кнопка возврата наверх */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-4 opacity-0 animate-fade-in-up ml-4 lg:ml-8 group cursor-pointer border-none bg-transparent outline-none"
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <img
          src="/Kristina logo.png"
          alt="Kristina Logo"
          className="w-20 h-20 object-cover rounded-full border-2 border-[#B4935B] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex flex-col items-start leading-tight">
          <span
            className="font-cinzel font-bold text-[#B4935B] text-2xl lg:text-3xl tracking-wide transition-colors group-hover:text-[#8B7355]"
            style={{ textShadow: "0 2px 8px rgba(180,147,91,0.3)" }}
          >
            Kristina ;D
          </span>
          <span className="font-cinzel font-medium text-[#8B7355] text-xs tracking-[0.2em] uppercase italic -mt-0.5">
            Digital Artist
          </span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 bg-[#0A1A33]/90 backdrop-blur-sm rounded-full px-2 py-1.5">
        {navLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "font-montserrat font-medium text-sm text-white/90 px-5 py-2 rounded-full",
              "hover:text-[#D4AF37] hover:bg-white/5",
              "transition-all duration-200",
              "opacity-0 animate-fade-in-up"
            )}
            style={{ animationDelay: `${animationDelay + 100 + index * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop Social Links */}
      <div
        className="hidden lg:flex items-center gap-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${animationDelay + 300}ms` }}
      >
        <a
          href="https://x.com/aurumross"
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-medium text-sm text-[#0A1A33] hover:text-[#B4935B] transition-colors"
        >
          X (Twitter)
        </a>

        <a
          href="https://webbiesocial.com/dashboard/aurumross"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "px-6 py-2.5 font-montserrat font-semibold text-sm text-[#0A1A33] rounded-full flex items-center justify-center",
            "bg-gradient-to-r from-[#D4AF37] via-[#B4935B] to-[#D4AF37]",
            "shadow-[0_2px_20px_rgba(180,147,91,0.4)]",
            "hover:shadow-[0_4px_30px_rgba(180,147,91,0.6)] hover:scale-105",
            "transition-all duration-200 ease-out"
          )}
        >
          Webbie Social
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        className="lg:hidden p-2 text-[#0A1A33]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#F9F7F2]/95 backdrop-blur-lg border-b border-[#DBCBAA]/30 p-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-montserrat font-medium text-[#0A1A33] hover:text-[#B4935B] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-[#DBCBAA]/30">
              <a
                href="https://x.com/aurumross"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat font-medium text-[#0A1A33] hover:text-[#B4935B] transition-colors py-2 text-left"
              >
                X (Twitter)
              </a>

              <a
                href="https://webbiesocial.com/dashboard/aurumross"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full px-6 py-3 font-montserrat font-semibold text-sm text-[#0A1A33] rounded-full text-center",
                  "bg-gradient-to-r from-[#D4AF37] via-[#B4935B] to-[#D4AF37]",
                  "shadow-[0_2px_20px_rgba(180,147,91,0.4)]"
                )}
              >
                Webbie Social
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
