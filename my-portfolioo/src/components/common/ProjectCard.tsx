import { ArrowRight } from "lucide-react"
import Link from "next/link"
import VideoModal from "./VideoModal";

type ProjectCardProps = {
    title: string;
    description: string;
    videoUrl: string;
    tags: string[];
}

export default function ProjectCard({ title, description, videoUrl, tags }: ProjectCardProps) {
    return (
        <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
            <VideoModal videoUrl={videoUrl} />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">
                {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span
                    key={tag}
                    className="inline-block bg-white/10 text-sm font-medium text-gray-300 rounded-full px-3 py-1"
                    >
                    {tag}
                    </span>
                ))}
                </div>
                <Link
                    href={`/work/project-${title}`}
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                Voir le projet
                <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
            </div>
    );
}