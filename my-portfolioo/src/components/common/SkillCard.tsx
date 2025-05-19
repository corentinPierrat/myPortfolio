import { getIcon } from "../utils/GetIcon";

export default function SkillCard({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon: string;
}) {
  const IconComponent = getIcon(icon);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
            <IconComponent className="text-purple-400" />
        </div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            {title}
        </h3>
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
