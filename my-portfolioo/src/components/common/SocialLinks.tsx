import { Linkedin, Github, Mail } from "lucide-react";

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
            <a
                href="https://github.com/corentinPierrat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href="https://www.linkedin.com/in/corentin-pierrat-a827952a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUHpD%2BKeyTB6bk7db%2F2xtGA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href="mailto:corentin.pierrat@epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mail"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
                <Mail className="w-5 h-5" />
            </a>
        </div>
    );
}