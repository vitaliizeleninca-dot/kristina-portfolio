import { cn } from "@/lib/utils";

const artworks = [
  {
    title: "Bird of Childhood",
    medium: "Homage to Brâncuși for HOMAGE Open Call",
    image: "https://images.unsplash.com/photo-1634017839464-5c339afa0df4?w=600&q=80",
    link: "https://x.com/aurumross/status/2028732903517995355?s=20",
  },
  {
    title: "Childhood Dreams",
    medium: "Created for MOONLIGHT Open Call",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    link: "https://x.com/aurumross/status/2027639745216430167?s=20",
  },
  {
    title: "The Renaissance Shimmering Childhood",
    medium: "Official Teaser",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80",
    link: "https://x.com/aurumross/status/2028732903517995355?s=20",
  },
  {
    title: "Breaking Through Concrete",
    medium: "Hope Open Call by 34 Gallery",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
    link: "https://x.com/aurumross/status/2024958419753730494?s=20",
  },
  {
    title: "Digital Skies Over the Ruins",
    medium: "Make Art Not War - Webbie Social",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80",
    link: "https://x.com/aurumross/status/2024520684106404339?s=20",
  },
  {
    title: "The Heirloom Scroll",
    medium: "Collection on Objkt (Tezos)",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
    link: "https://objkt.com/users/tz1PFHusm1gxNEVSpNu3wMJwo52FUUjqMb9J",
  },
];

export function GalleryGrid() {
  return (
    <section id="portfolio" className="relative py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
            Selected Works
          </span>
          <h2
            className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
            style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
          >
            Portfolio
          </h2>
          <p className="mt-4 font-montserrat text-base text-[#1A1A1A]/60 max-w-lg mx-auto leading-relaxed">
            A curated selection of AI-driven artworks exploring the boundaries
            between human creativity and machine intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <a
              key={artwork.title}
              href={artwork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer block",
                "bg-[#F9F7F2] border border-[#DBCBAA]/30",
                "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
                "hover:shadow-[0_8px_40px_rgba(180,147,91,0.2)]",
                "hover:border-[#D4AF37]/40",
                "hover:-translate-y-1",
                "transition-all duration-500 ease-out"
              )}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-[#0A1A33]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="font-playfair font-bold text-xl text-white leading-tight">
                    {artwork.title}
                  </h3>
                  <p className="mt-1 font-montserrat text-sm text-[#D4AF37]/90 tracking-wide">
                    {artwork.medium}
                  </p>
                </div>
              </div>

              {/* Bottom info bar (visible by default) */}
              <div className="px-5 py-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-playfair font-semibold text-lg text-[#0A1A33]">
                  {artwork.title}
                </h3>
                <p className="mt-0.5 font-montserrat text-xs text-[#8B7355] tracking-wide uppercase">
                  {artwork.medium}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
