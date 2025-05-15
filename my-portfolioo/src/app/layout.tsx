import './globals.css';
import Navbar from '../components/Navbar';
import StageBanner from '../components/StageBanner';
import { Inter } from 'next/font/google'
import SocialLinks from '../components/SocialLinks';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Corentin Pierrat | Étudiant en développement informatique",
  description:
    "Portfolio de Corentin Pierrat, étudiant en développement informatique. Découvrez mes projets, mes compétences et ma passion pour le développement.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`bg-gradient-to-b from-black to-gray-900 text-white ${inter.className}`}>
        <StageBanner />
        <header className="pt-16">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-xl font-bold">Corentin Pierrat</p>
                <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} Tous droits réservés</p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
