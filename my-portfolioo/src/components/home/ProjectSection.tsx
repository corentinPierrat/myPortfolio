import Badge from "../common/Badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../common/ProjectCard";

export default function ProjectSection() {
  return (
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
            videoUrl="/rpgvideo.mp4"
            tags={["C", "CSFML"]}
            />
            <ProjectCard
            title="Comparateur de tableaux de garantie"
            description="Projet réalisé lors d’un hackathon avec Harmonie Mutuelle: comparaison claire des offres santé. Prix du Jury."
            videoUrl="/harmonie.webm"
            tags={["React", "Next.js"]}
            />
        </div>
        <div className="flex justify-center mt-12">
            <Link href="projets">
            <Button
                variant="outline"
                className="cursor-pointer border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-6 text-base font-medium"
            >
                Voir tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
        </div>
        </div>
    </section>
  );
}