import Link from "next/link"

export default function StageBanner() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-2 z-50">
      <div className="container mx-auto">
        <p className="text-sm font-medium">
          Actuellement à la recherche d'un stage en développement informatique à temps partiel pour Septembre 2025 à Janvier 2026 •{" "}
          <Link href="/contact" className="underline font-semibold hover:text-white/90 transition-colors">
            Me contacter
          </Link>
        </p>
      </div>
    </div>
  )
}