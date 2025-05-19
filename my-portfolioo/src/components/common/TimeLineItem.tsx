type ExperienceProps = {
    index: number;
    experience: {
        period: string;
        title: string;
        institution: string;
        description: string;
    };
}

export default function TimeLineItem({index, experience} : ExperienceProps) {
  return (
    <div
        key={index}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
        >
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm">
            {experience.period}
            </div>
            <h3 className="text-xl font-bold whitespace-pre-line">{experience.title}</h3>
            <span className="text-purple-400">{experience.institution}</span>
        </div>
        <p className="text-gray-300 whitespace-pre-line">{experience.description}</p>
        </div>
  );
}