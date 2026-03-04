import {
  GlowBackground,
  Navbar,
  HeroSection,
  GalleryGrid,
  ExhibitionsSection,
  AboutSection,
  ContactSection,
} from "@/components/landing";

function Home() {
  return (
    <>
      <GlowBackground />
      <Navbar />
      <HeroSection />
      <GalleryGrid />
      <ExhibitionsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default Home;
