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
  Star,
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
    <div className="relative h-[700px] overflow-hidden">
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

            {/* Image with parallax effect */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-[7000ms] ease-out"
              priority={index === 0}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

            {/* Animated particles background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse animation-delay-400"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Text content */}
                  <div className="text-white space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in-up border border-white/20">
                      <slide.icon className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-blue-300">{slide.stats}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                      <span className="block text-white">
                        {slide.title.split(" ")[0]}
                      </span>
                      <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {slide.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl font-semibold text-blue-300 animate-fade-in-up animation-delay-400">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-800">
                      <Link
                        href={slide.link1}
                        className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span>{slide.cta1}</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={slide.link2}
                        className="group inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
                      >
                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        <span>{slide.cta2}</span>
                      </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center space-x-6 pt-6 animate-fade-in-up animation-delay-1000">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                        <span className="text-sm text-gray-300 ml-2">
                          Excellence reconnue
                        </span>
                      </div>
                      <div className="h-4 w-px bg-gray-400"></div>
                      <div className="text-sm text-gray-300">
                        Université agréée par l&apos;État
                      </div>
                    </div>
                  </div>

                  {/* Right side - Stats cards */}
                  <div className="hidden lg:block space-y-4 animate-fade-in-up animation-delay-1200">
                    <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <div className="text-white font-bold text-lg">
                        Facultés d&apos;Excellence
                      </div>
                      <div className="text-blue-200 text-sm font-medium">
                        FDECO & FAST
                      </div>
                    </div>
                    <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-4xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                        20+
                      </div>
                      <div className="text-white font-bold text-lg">
                        Filières Spécialisées
                      </div>
                      <div className="text-indigo-200 text-sm font-medium">
                        DUT, Licence, Master
                      </div>
                    </div>
                    <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                        85%
                      </div>
                      <div className="text-white font-bold text-lg">
                        Taux d&apos;Insertion
                      </div>
                      <div className="text-cyan-200 text-sm font-medium">
                        Emploi garanti
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Stats - Bottom overlay */}
                <div className="lg:hidden absolute bottom-20 left-0 right-0">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          2
                        </div>
                        <div className="text-white text-sm font-semibold">
                          Facultés
                        </div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                        <div className="text-2xl font-bold text-indigo-400 mb-1">
                          20+
                        </div>
                        <div className="text-white text-sm font-semibold">
                          Filières
                        </div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          85%
                        </div>
                        <div className="text-white text-sm font-semibold">
                          Insertion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Redesigned */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators - Redesigned */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-blue-500"
                : "w-6 bg-white/50 hover:bg-white/70"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm font-medium">Découvrir</div>
          <div className="w-px h-8 bg-white/50"></div>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </div>
  );
}
