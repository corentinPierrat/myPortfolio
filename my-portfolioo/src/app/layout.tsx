import './globals.css';
import Navbar from '../components/layout/Navbar';
import StageBanner from '../components/layout/StageBanner';
import { Inter } from 'next/font/google'
import Footer from '../components/layout/Footer';

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
          <Footer />
      </body>
    </html>
  );
}
