"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        try {
            await emailjs.send(
                "service_yuq0o8j",
                "template_4vt54no",
                formData,
                "dpkUmqxCir7lcTPVC"
            );
            setSuccess(true);
            setFormData({name: "", email: "", subject: "", message: ""});
        } catch (error) {
            console.error("Error sending email:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                    Nom complet*
                </label>
                <input
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email*
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                    Sujet*
                </label>
                <input
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                    Message*
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-base font-medium"
            >
                {loading ? "Envoi en cours..." : "Envoyer"}
            </Button>
            {success && (
                <div className="text-green-500 text-sm mt-4">
                    Votre message a été envoyé avec succès !
                </div>
            )}
            {error && (
                <div className="text-red-500 text-sm mt-4">
                    Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.
                </div>
            )}
        </form>
    )
}