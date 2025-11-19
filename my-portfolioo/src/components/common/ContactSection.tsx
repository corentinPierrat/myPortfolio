import { Button } from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactSection({title}: {title: string}) {
  return (
    <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Que vous ayez un projet à réaliser ou une opportunité de stage à proposer
            (disponible d'Avril 2026 à Juillet 2026), je serais ravi d&apos;échanger avec vous.
            </p>
            <Link href="/contact">
              <Button className="cursor-pointer bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium">
                Me contacter
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
}