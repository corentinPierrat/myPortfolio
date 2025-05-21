import Badge from "../common/Badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
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
                  <Button className="cursor-pointer bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium">
                    Voir mes projets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="contact">
                  <Button
                    variant="outline"
                    className="cursor-pointer border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-6 text-base font-medium"
                  >
                    Me contacter
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  );
}