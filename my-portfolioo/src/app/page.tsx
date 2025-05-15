import { Button } from "../components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Badge from "../components/Badge"
import ProjectCard from "../components/ProjectCard"
import SocialLinks from "../components/SocialLinks"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50"></div><div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute right-1/4 bottom-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-20"></div>
        </div>

          <div className="container mx-auto max-w-5xl relative">
            <div className="flex flex-col items-center text-center">
              <Badge text="Corentin Pierrat"/>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Étudiant passioné par le{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  développement
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
              Je progresse en réalisant des projets concrets, en explorant différents domaines et en cherchant par moi-même.
              Chaque projet est une occasion d’apprendre, de me dépasser, et de créer quelque chose de fonctionnel et utile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="projets">
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium">
                    Voir mes projets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="contact">
                  <Button
                    variant="outline"
                    className="border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-6 text-base font-medium"
                  >
                    Me contacter
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 relative">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center mb-16">
              <Badge text="Projets récents"/>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes réalisations</h2>
              <p className="text-gray-300 max-w-2xl">
                Une sélection de mes réalisations récents qui démontrent mes compétences en développement informatique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Hacktivist"
                description="Un jeu RPG réalisé en équipe de 4 personnes en première année."
                imageUrl="/RPGVIDEO.mp4"
                tags={["C", "CSFML"]}
              />
              <ProjectCard
                title="Comparateur de tableaux de garantie"
                description="Projet réalisé lors d’un hackathon avec Harmonie Mutuelle: comparaison claire des offres santé. Prix du Jury."
                imageUrl="/Harmonie.webm"
                tags={["React", "Next.js"]}
              />
            </div>
            <div className="flex justify-center mt-12">
              <Link href="projets">
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-6 text-base font-medium"
                >
                  Voir tous les projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="/corentin.pierrat.JPG"
                  alt="Portrait"
                  className="h-full w-full object-cover object-[45%_center]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <SocialLinks />
              </div>
            </div>

            <div>
              <Badge text="À propos de moi" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Étudiant en développement informatique curieux et motivé
              </h2>
              <p className="text-gray-300 mb-6">
              Actuellement en formation à Epitech, je développe des projets variés en explorant différents domaines de l’informatique.
              J’aime apprendre, relever des défis techniques et collaborer sur des idées concrètes.
              </p>
              <Link href="/about">
                <Button className="rounded-full px-6 py-6 text-base font-medium bg-white/5 hover:bg-white/10 border border-white/10">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Travaillons ensemble</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Que vous ayez un projet à réaliser ou une opportunité de stage à proposer
            (disponible de Septembre 2025 à Janvier 2026), je serais ravi d'échanger avec vous.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium">
                Me contacter
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </div>
  );
}
