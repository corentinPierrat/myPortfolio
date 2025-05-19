import SkillSection from "@/components/about/SkillSection"
import HeroSection from "../../components/about/HeroSection"
import XpSection from "../../components/about/XpSection"
import ContactSection from "@/components/common/ContactSection"
import FormationSection from "@/components/about/FormationSection"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroSection />
      <SkillSection />
      <XpSection />
      <FormationSection />
      <ContactSection title="Intéressé par mon profil?"/>
    </div>
  )
}
