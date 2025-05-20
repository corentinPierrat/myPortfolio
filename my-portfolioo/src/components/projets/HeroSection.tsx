import Badge from "../common/Badge";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-1/3 top-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-20"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="Mes projets" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Mes réalisations</h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                    Découvrez une sélection de mes projets qui démontrent mes compétences en développement.
                    </p>
                </div>
            </div>
        </section>
    );
}