import SocialLinks from "@/components/common/SocialLinks"
import ContactCard from "../common/ContactCard"

export default function Informations() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
            <div className="space-y-8">
                <ContactCard title="Email" text="corentin.pierrat@epitech.eu" icon="mail" />
                <ContactCard title="Téléphone" text="+33 6 81 62 50 83" icon="phone" />
                <ContactCard title="Localisation" text="Nancy/Epinal, France" icon="mapPin" />

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                    <h3 className="text-lg font-medium mb-4">Mes Réseaux</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}