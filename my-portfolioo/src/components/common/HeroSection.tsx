import Badge from "./Badge";

export default function HeroSection({title_badge, title, text}: {title_badge: string, title: string, text: string}) {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-1/3 top-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-20"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge text={title_badge} />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                    {text}
                    </p>
                </div>
            </div>
        </section>
    );
}