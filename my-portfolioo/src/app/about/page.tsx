import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import SkillSection from "@/components/about/SkillSection"
import HeroSection from "../../components/about/HeroSection"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroSection />
      <SkillSection />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
              Expérience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon parcours professionnel</h2>
            <p className="text-gray-300 max-w-2xl">
              Un aperçu de mon expérience professionnelle et de mon parcours dans le développement web.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                period: "2021 - Présent",
                title: "Développeur Frontend Senior",
                company: "Entreprise XYZ",
                description:
                  "Développement d'applications web modernes avec React et Next.js. Collaboration avec les designers pour créer des interfaces utilisateur intuitives et esthétiques.",
              },
              {
                period: "2018 - 2021",
                title: "Développeur Web",
                company: "Agence ABC",
                description:
                  "Création de sites web et d'applications pour divers clients. Utilisation de technologies modernes pour offrir des solutions sur mesure.",
              },
              {
                period: "2016 - 2018",
                title: "Développeur Junior",
                company: "Startup DEF",
                description:
                  "Participation au développement d'une application web innovante. Apprentissage et mise en pratique des meilleures pratiques de développement.",
              },
            ].map((experience, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm">
                    {experience.period}
                  </div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <span className="text-purple-400">{experience.company}</span>
                </div>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
              Formation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon parcours académique</h2>
            <p className="text-gray-300 max-w-2xl">
              Les formations et diplômes qui ont façonné mes compétences et ma carrière.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                period: "2014 - 2016",
                degree: "Master en Développement Web",
                institution: "Université XYZ",
                description:
                  "Spécialisation en développement d'applications web modernes et en expérience utilisateur.",
              },
              {
                period: "2011 - 2014",
                degree: "Licence en Informatique",
                institution: "École ABC",
                description: "Formation générale en informatique avec une spécialisation en développement logiciel.",
              },
            ].map((education, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm">
                    {education.period}
                  </div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <span className="text-purple-400">{education.institution}</span>
                </div>
                <p className="text-gray-300">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intéressé par mon profil?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              N&apos;hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium">
                Me contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
