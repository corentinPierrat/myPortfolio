import { Download } from "lucide-react"
import { Button } from "../ui/button"
import Badge from "../common/Badge"
import ProfilCard from "../common/ProfilCard"

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/3 top-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <div className="container mx-auto max-w-5xl relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="À propos de moi" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Étudiant développeur informatique</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ProfilCard src="/corentin.pierrat.jpg" />
                    <div className="text-left">
                        <h2 className="text-2xl font-bold mb-4">Qui suis-je?</h2>
                        <p className="text-gray-300 mb-4">
                            Je m&apos;appelle Corentin Pierrat, je suis étudiant en deuxième année à EPITECH Nancy dans le programme grande école.
                            Curieux et motivé, je m&apos;intéresse à différents domaines du développement, que ce soit le web, les applications, ou la programmation bas-niveau.
                            J&apos;aime apprendre par la pratique et je suis toujours partant pour découvrir de nouvelles technologies.
                        </p>
                        <div className="rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 border border-white/10 backdrop-blur-sm mb-6">
                            <p className="text-gray-300">
                                Actuellement étudiant en informatique, je suis à la recherche d&apos;un stage en développement informatique du 15 Septembre 2025 au 28 Février 2026.
                            </p>
                        </div>
                        <a href="/pierrat_corentin_CV.pdf" download>
                        <Button
                            variant={"outline"}
                            className="cursor-pointer rounded-full px-6 py-6 text-base font-medium bg-white/5 hover:bg-white/10 border border-white/10"
                        >
                            Télécharger mon CV
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}