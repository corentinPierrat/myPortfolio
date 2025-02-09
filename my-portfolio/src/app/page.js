"use client"; // On active le mode client pour utiliser l'animation
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const words = ["Développeur", "Créatif", "Passionné"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">
        Salut, je suis <span className="text-blue-400">Corentin Pierrat</span>
      </h1>
      <h2 className="mt-4 text-3xl">
        Je suis <span className="text-blue-400">{words[index]}</span>
      </h2>
    </section>
  );
}
