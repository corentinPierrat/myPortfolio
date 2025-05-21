import { getIcon } from "../utils/GetIcon";


export default function ContactCard({title, text, icon}: {title: string, text: string, icon: string}) {
    const Icon = getIcon(icon);
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-1">{title}</h3>
                    <p className="text-gray-300">{text}</p>
                </div>
            </div>
        </div>
    );
}