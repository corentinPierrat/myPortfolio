export default function SkillCard({ key, title, skills }: { key: number ,title: string; skills: string[] }) {
  return (
        <div
            key={key}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
        >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-3">
                {skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-gray-300">{skill}</span>
                </li>
                ))}
            </ul>
        </div>
  );
}