import SkillCard from "../common/SkillCard";
import Badge from "../common/Badge";

export default function SkillSection() {
    const skills = [
        {
          title: "Langages de programmation",
          icon: "code",
          skills: ["C", "C++", "Python", "JavaScript/TypeScript", "Haskell", "SQL"],
        },
        {
          title: "Développement Web",
          icon: "globe",
          skills: ["HTML/CSS", "React.js", "Next.js", "Tailwind CSS"],
        },
        {
          title: "DevOps & Outils",
          icon: "server",
          skills: ["Git/GitHub", "Docker", "Jenkins", "Gitlab CI/CD", "Linux/Unix"],
        },
    ]
    return (
        <section className="py-20 px-6 relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <div className="container mx-auto max-w-5xl relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text="Compétences" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que je sais faire</h2>
                    <p className="text-gray-300 max-w-2xl">
                        Voici les outils et langages que j’ai appris à maîtriser au fil de mes projets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                    <SkillCard key={index} title={category.title} skills={category.skills} />
                ))}
                </div>
            </div>
        </section>
    );
}