import type React from "react";
import Link from 'next/link';
import { Home, User, Briefcase, Mail, Github} from 'lucide-react';

type NavbarProps = {
  href: string;
  icon : React.ElementType;
  text: string;
  separator?: boolean;
}

const NavLink = ({ href, icon: Icon, text, separator = false } : NavbarProps) => (
  <>
  <Link
    href={href}
    className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
  >
    <Icon size={20} />
    <span className="hidden sm:inline">{text}</span>
    </Link>
    {separator && <div className="h-4 w-px bg-white/20" />}
  </>
);

const Navbar = () => {
  return (
    <div className="fixed top-16 left-0 w-full flex justify-center z-50">
      <nav className="bg-black/30 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/10">
        <div className="flex items-center">
          <NavLink href="/" icon={Home} text="Accueil" separator={true} />
          <NavLink href="/about" icon={User} text="À propos" separator={true} />
          <NavLink href="/projets" icon={Briefcase} text="Projets" separator={true}/>
          <NavLink href="/contact" icon={Mail} text="Contact" separator={true} />
          <NavLink href="https://github.com/corentinPierrat" icon={Github} text="Github" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;