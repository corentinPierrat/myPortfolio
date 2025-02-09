import Navbar from "@/components/Navbar";
import Clock from "@/components/Clock";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mon Portfolio</title>
      </head>
      <body className="bg-gray-900 text-white">
        <header className="display-flex p-8 justify-center fit-height min-width-0 fill-width z-index-9 Header_position__y2w_C">  {/* Utilisation de justify-between */}
          <Navbar />
                <Clock />
        </header>
        <main className="p-6">{children}</main>  {/* Le contenu de chaque page */}
        <footer className="p-4 text-center bg-gray-800">
          <p>© 2025 - Mon Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
