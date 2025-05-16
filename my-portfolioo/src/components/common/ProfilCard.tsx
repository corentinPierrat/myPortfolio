import SocialLinks from "./SocialLinks";
import Image from "next/image";

type ProfilCardProps = {
    src: string;
}

export default function ProfilCard( {src}: ProfilCardProps) {
    return (
        <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <Image
                    width={800}
                    height={400}
                    src={src}
                    alt="ProfilCard"
                    className="h-full w-full object-cover object-[45%_center]"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <SocialLinks />
            </div>
        </div>
    );
}