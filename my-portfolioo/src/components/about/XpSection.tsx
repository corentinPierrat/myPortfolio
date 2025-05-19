import TimeLineItem from "../common/TimeLineItem"
import Badge from "../common/Badge"

export default function XpSection() {
    const experiences = [
        {
            period: "01/2025",
            title: "Hackathon d'une semaine",
            institution: "Harmonie Mutuelle",
            description:
              "Création d’un comparateur interactif de tableaux de garantie santé.",
          },
          {
            period: "07/2024 - 12/2024",
            title: "Stage Développeur informatique",
            institution: "BeeZim",
            description:
              "- Réalisation d'un site de réservation de salles pour l'espace de coworking BeePlex.\n- Réalisation d'un script de facturation de boîte mail.",
          },
          {
            period: "01/2020",
            title: "Stage Découverte d'une semaine",
            institution: "Inkivari",
            description:
              "- Découverte du RGPD.\n- Apprentissage à la programmation d'un site web.",
          },
    ]
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="Expérience" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon parcours professionnel</h2>
                    <p className="text-gray-300 max-w-2xl">
                    Un aperçu de mon expérience professionnelle et de mon parcours dans le développement informatique.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <TimeLineItem key={index} index={index} experience={experience}/>
                    ))}
                </div>
            </div>
        </section>
    )
}