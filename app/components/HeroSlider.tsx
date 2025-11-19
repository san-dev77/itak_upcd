"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  Globe,
  Play,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    image: "/grouped_picture.JPG",
    title: "Excellence Académique",
    subtitle: "Avec l'UPCD, l'avenir c'est aujourd'hui",
    description:
      "Rejoignez une université moderne qui forme les leaders de demain grâce à un enseignement d'excellence, des infrastructures de pointe et un accompagnement personnalisé vers la réussite.",
    icon: GraduationCap,
    bgColor: "from-slate-900 via-blue-900 to-indigo-900",
    stats: "1000+ Étudiants",
    cta1: "Découvrir nos formations",
    cta2: "Visite virtuelle",
    link1: "/formations",
    link2: "/presentation",
  },
  {
    image: "/teachers.JPG",
    title: "Innovation & Recherche",
    subtitle: "Façonnons l'avenir ensemble",
    description:
      "Participez à la recherche scientifique de pointe avec nos laboratoires modernes, nos partenariats internationaux et nos programmes d'innovation technologique pour l'Afrique.",
    icon: Users,
    bgColor: "from-blue-900 via-indigo-800 to-cyan-900",
    stats: "20+ Filières",
    cta1: "Nos programmes de recherche",
    cta2: "Laboratoires",
    link1: "/formations",
    link2: "/presentation",
  },
  {
    image: "/soutenance_img.JPG",
    title: "Partenariats Internationaux",
    subtitle: "Une ouverture sur le monde",
    description:
      "Bénéficiez de nos partenariats privilégiés avec l'Espagne (CEDIFA), d'opportunités de stages à Séville et d'échanges académiques pour une formation internationale.",
    icon: Globe,
    bgColor: "from-indigo-900 via-blue-800 to-slate-900",
    stats: "Stages en Espagne",
    cta1: "Voir les partenariats",
    cta2: "Opportunités internationales",
    link1: "/partenariats",
    link2: "/vie-etudiante",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div className="relative h-full">
            {/* Fallback gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}
            ></div>

            {/* Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
                    <slide.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-2" />
                    <span className="text-blue-300">{slide.stats}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 text-white">
                    <span className="block">{slide.title.split(" ")[0]}</span>
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-3 sm:mb-4">
                    {slide.subtitle}
                  </p>

                  {/* Description - Hidden on mobile, shown on tablet+ */}
                  <p className="hidden md:block text-base md:text-lg text-gray-200 leading-relaxed mb-6 max-w-2xl">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      href={slide.link1}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                    >
                      <span>{slide.cta1}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Link>
                    <Link
                      href={slide.link2}
                      className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all backdrop-blur-sm"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span>{slide.cta2}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 sm:w-10 md:w-12 bg-blue-500"
                : "w-4 sm:w-5 md:w-6 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
