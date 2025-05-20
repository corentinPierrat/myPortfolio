import ContactSection from "@/components/common/ContactSection";
import HeroSection from "@/components/projets/HeroSection";
import ProjectSection from "@/components/projets/ProjetSection";

export default function Projets() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <HeroSection />
            <ProjectSection />
            <ContactSection title="Vous avez un projet en tête?" />
        </div>
    )
}