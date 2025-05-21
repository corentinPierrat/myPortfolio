import ProjectCard from "../common/ProjectCard";

export default function ProjectSection() {
    const projects = [
        {
            title: "Hacktivist",
            description: "Un jeu RPG réalisé en équipe de 4 personnes en première année.",
            videoUrl: "/RPGVIDEO.mp4",
            tags: ["C", "CSFML"],
            projectUrl: "https://github.com/TheotimeCollier/MyRPG"
        },
        {
            title: "Comparateur de tableaux de garantie",
            description: "Projet réalisé lors d’un hackathon avec Harmonie Mutuelle: comparaison claire des offres santé. Prix du Jury.",
            videoUrl: "/Harmonie.webm",
            tags: ["React", "Next.js"]
        },
        {
            title: "Reproduction du jeu Jetpack Joyride",
            description: "Un projet de jeu vidéo, adaptée en version multijoueur en réseau. Il a été développé en C++.",
            videoUrl: "/my_jetpack.webm",
            tags: ["C++", "SFML"],
            projectUrl: "https://github.com/corentinPierrat/Jetpack"
        },
        {
            title: "Site de réservation de salles pour l'espace de coworking BeePlex",
            description: "Un projet de site web de réservation de salles réalisé en stage dans l'entreprise BeeZim, réalisé en React et Flask.",
            videoUrl: "/reservation_beeplex.webm",
            tags: ["React", "Flask", "Docker", "Gitlab CI/CD"],
            projectUrl: "https://reservation.beeplex.fr/"
        },
        {
            title: "Mon Portfolio",
            description: "Mon portfolio personnel, réalisé avec Next.js et Tailwind CSS.",
            videoUrl: "/my_portfolio.webm",
            tags: ["Next.js", "Tailwind CSS"],
            projectUrl: "https://github.com/corentinPierrat/myPortfolio"
        }
    ]
    return (
        <section className="py-20 px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            videoUrl={project.videoUrl}
                            tags={project.tags}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}