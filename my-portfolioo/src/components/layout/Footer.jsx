import SocialLinks from "../common/SocialLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-xl font-bold">Corentin Pierrat</p>
                <p className="text-gray-400 text-sm mt-1">© {currentYear} Tous droits réservés</p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </footer>
    );
}