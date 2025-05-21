import HeroSection from "@/components/common/HeroSection"
import Form from "@/components/contact/Form"
import Informations from "@/components/contact/Informations"

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
            <HeroSection
                title_badge="Contact"
                title="Parlons de votre projet"
                text=" N'hésitez pas à me contacter pour discuter de vos idées ou pour toute question."
            />

            <section className="py-12 px-6 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                            <Form />
                        </div>
                    <Informations />
                    </div>
                </div>
            </section>
        </div>
    )
}