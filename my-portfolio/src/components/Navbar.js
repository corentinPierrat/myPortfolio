import Link from 'next/link';
import { Home, User, Briefcase} from 'lucide-react';

const NavLink = ({ href, icon: Icon, text }) => (
  <Link
    href={href}
    className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
  >
    <Icon size={20} />
    <span className="hidden sm:inline">{text}</span>
  </Link>
);

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/10">
      <div className="flex items-center gap-1 sm:gap-2">
        <NavLink href="/" icon={Home} text="" />
        <p>|</p>
        <NavLink href="/about" icon={User} text="About" />
        <NavLink href="/work" icon={Briefcase} text="Work" />
      </div>
    </nav>
  );
};

export default Navbar;