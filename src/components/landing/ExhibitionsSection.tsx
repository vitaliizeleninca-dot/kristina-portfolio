import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

const exhibitions = [
  {
    title: "Digital Showcase",
    venue: "Webbie Social: Creator Spotlight",
    location: "Finland | Online",
    date: "March 2026",
    status: "current" as const,
    link: "https://webbiesocial.com/dashboard/aurumross",
    description:
      "Recognized for 17+ digital works showcasing a vibrant platform for artistic research and experimentation in contemporary AI-driven practices",
  },
  {
    title: "Art Platform",
    venue: "Aurum: Childhood in Art",
    location: "Finland | Online",
    date: "In Development",
    status: "current" as const,
    link: "https://childhood-in-art-charity-pl-373.created.app",
    description:
      "An upcoming collaborative platform and research project dedicated to the intersection of contemporary art and the phenomenon of childhood",
  },
  {
    title: "International Open Calls",
    venue: "ArtJobs Global Network",
    location: "Finland | Online",
    date: "Current",
    status: "current" as const,
    link: "https://www.artjobs.com/",
    description:
      "Actively participating in international juried open calls and artistic selection processes, focusing on projects that bridge AI technology with contemporary humanitarian themes",
  },
];

export function ExhibitionsSection() {
  return (
    <section
      id="exhibitions"
      className="relative py-24 px-6 md:px-10 lg:px-16 bg-[#0A1A33]/[0.03]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-[#B4935B]">
            Shows & Events
          </span>
          <h2
            className="mt-4 font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#0A1A33] leading-tight"
            style={{ textShadow: "0 1px 4px rgba(180,147,91,0.15)" }}
          >
            Exhibitions
          </h2>
        </div>

        {/* Exhibition Cards */}
        <div className="flex flex-col gap-6">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.title}
              className={cn(
                "relative flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-2xl",
                "bg-[#F9F7F2]/80 border border-[#DBCBAA]/30",
                "shadow-[0_4px_20px_rgba(180,147,91,0.08)]",
                "hover:shadow-[0_8px_40px_rgba(180,147,91,0.15)]",
                "hover:border-[#D4AF37]/40",
                "transition-all duration-300"
              )}
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full font-montserrat text-xs font-semibold uppercase tracking-wider",
                    exhibition.status === "upcoming"
                      ? "bg-[#D4AF37]/15 text-[#B4935B] border border-[#D4AF37]/30"
                      : "bg-[#0A1A33]/5 text-[#8B7355]/70 border border-[#DBCBAA]/20"
                  )}
                >
                  {exhibition.status}
                </span>
              </div>

              {/* Left - Meta */}
              <div className="flex flex-col gap-2 md:min-w-[200px]">
                <div className="flex items-center gap-2 text-[#B4935B]">
                  <Calendar className="w-4 h-4" />
                  <span className="font-montserrat text-sm font-medium">
                    {exhibition.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#8B7355]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-montserrat text-sm">
                    {exhibition.location}
                  </span>
                </div>
              </div>

              {/* Right - Content */}
              <div className="flex-1">
                <a
                  href={exhibition.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-playfair font-bold text-xl text-[#0A1A33] hover:text-[#B4935B] transition-colors"
                >
                  {exhibition.title}
                </a>

                <p className="mt-1 font-montserrat text-sm text-[#B4935B]/80 font-medium">
                  {exhibition.venue}
                </p>

                <p className="mt-3 font-montserrat text-sm text-[#1A1A1A]/60 leading-relaxed max-w-2xl">
                  {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
