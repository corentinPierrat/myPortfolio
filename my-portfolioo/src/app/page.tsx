import HeroSection from "../components/home/HeroSection"
import ProjectSection from "../components/home/ProjectSection"
import AboutSection from "../components/home/AboutSection"
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      </div>
  );
}
