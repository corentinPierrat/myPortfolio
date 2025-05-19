import Badge from "../common/Badge";
import TimeLineItem from "../common/TimeLineItem";

export default function FormationSection() {
    const formations = [
        {
            period: "2023-2028",
            title: "Diplôme d’Expert en Technologie de l’information visé par le\nMinistère de l’Enseignement Supérieur et de la Recherche.",
            institution: "Epitech, Nancy",
            description:
            "- Pédagogie par projet.\n- Apprentissage à la programmation.\n- Développement des Softs Skills.",
        },
        {
            period: "2020-2023",
            title: "Bac Général avec mention bien",
            institution: "Lycée Pierre Mendès France, Epinal",
            description: "Spécialité Numérique Sciences Informatiques et Mathématiques.",
        },
    ]
    return (
        <section className="py-20 px-6 relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-20"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="Formation" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon parcours académique</h2>
                    <p className="text-gray-300 max-w-2xl">
                    Les formations et diplômes qui ont façonné mes compétences et ma carrière.
                    </p>
                </div>

                <div className="space-y-8">
                    {formations.map((education, index) => (
                        <TimeLineItem key={index} index={index} experience={education}/>
                    ))}
                </div>
            </div>
        </section>
    );
}