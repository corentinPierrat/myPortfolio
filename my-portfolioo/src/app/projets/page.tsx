import ContactSection from "@/components/common/ContactSection";
import HeroSection from "@/components/common/HeroSection";
import ProjectSection from "@/components/projets/ProjetSection";

export default function Projets() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <HeroSection
                title_badge="Mes projets"
                title="Mes réalisations"
                text="Découvrez une sélection de mes projets qui démontrent mes compétences en développement."
            />
            <ProjectSection />
            <ContactSection title="Vous avez un projet en tête?" />
        </div>
    )
}