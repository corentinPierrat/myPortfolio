import Badge from "../common/Badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProfilCard from "../common/ProfilCard";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ProfilCard src="/corentin.pierrat.JPG" />
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
  );
}