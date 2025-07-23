import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Heart, Star, Trophy, BookOpen, Coffee, Music, Camera,
  MapPin, Calendar, Clock, Award, Smile, Zap, Target, Globe,
  CheckCircle, ArrowRight, GraduationCap, Building, Lightbulb,
  Gamepad2, Palette, Mic, Film, Headphones, PartyPopper
} from "lucide-react";

export default function VieEtudiante() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-green-300 rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <Heart className="w-4 h-4 mr-2" />
                Vie Étudiante Dynamique depuis 2016
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
                  Vie
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Étudiante
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-300">
                  Épanouissante
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Découvrez la richesse de la vie universitaire à l'UPCD : communauté dynamique,
                activités variées et accompagnement personnalisé pour votre épanouissement.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/admission"
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Rejoindre l'UPCD
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Visiter le Campus
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Student Life Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-white font-semibold">Étudiants</div>
                <div className="text-gray-300 text-sm mt-2">Communauté active</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white font-semibold">Activités</div>
                <div className="text-gray-300 text-sm mt-2">Clubs & événements</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-white font-semibold">Support</div>
                <div className="text-gray-300 text-sm mt-2">Accompagnement</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
                <div className="text-white font-semibold">Satisfaction</div>
                <div className="text-gray-300 text-sm mt-2">Vie étudiante</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Campus Life - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Building className="w-4 h-4 mr-2" />
              Campus d'Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              La Vie sur le <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Campus</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Un environnement dynamique et enrichissant pour l'épanouissement personnel et académique de tous nos étudiants
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Campus Moderne */}
              <div className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Campus Moderne</h3>
                  <p className="text-gray-700 text-center leading-relaxed mb-6">
                    Installations modernes au centre-ville de Kati avec des équipements de pointe pour l'apprentissage et l'innovation
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">Équipements de pointe</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">Espaces modernes</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">Centre-ville accessible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communauté Étudiante */}
              <div className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Communauté Étudiante</h3>
                  <p className="text-gray-700 text-center leading-relaxed mb-6">
                    Une communauté diverse et dynamique favorisant les échanges interculturels et l'entraide mutuelle
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-600 text-sm">Diversité culturelle</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-600 text-sm">Esprit d'entraide</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-600 text-sm">Activités communes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accompagnement */}
              <div className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Accompagnement</h3>
                  <p className="text-gray-700 text-center leading-relaxed mb-6">
                    Suivi personnalisé et accompagnement dans le parcours académique et professionnel de chaque étudiant
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-gray-600 text-sm">Suivi personnalisé</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-gray-600 text-sm">Conseil d'orientation</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-gray-600 text-sm">Support 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Notre Campus en Chiffres</h3>
                <p className="text-xl text-green-200">Un environnement d'apprentissage exceptionnel</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">5000m²</div>
                  <div className="text-white font-semibold">Surface Campus</div>
                  <div className="text-green-200 text-sm mt-1">Espaces modernes</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
                  <div className="text-white font-semibold">Salles de Cours</div>
                  <div className="text-green-200 text-sm mt-1">Équipées technologie</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
                  <div className="text-white font-semibold">Laboratoires</div>
                  <div className="text-green-200 text-sm mt-1">Équipements de pointe</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
                  <div className="text-white font-semibold">Étudiants</div>
                  <div className="text-green-200 text-sm mt-1">Communauté active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-green-100 text-purple-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Camera className="w-4 h-4 mr-2" />
              Galerie Vie Étudiante
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Moments de <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">Vie</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Découvrez les moments forts de la vie étudiante à travers notre galerie dynamique et inspirante
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  image: "/activity1.jpg",
                  title: "Activités Étudiantes",
                  description: "Événements et activités organisés par les étudiants",
                  icon: PartyPopper,
                  color: "blue"
                },
                {
                  image: "/activity2.JPG",
                  title: "Événements Campus",
                  description: "Conférences, séminaires et événements académiques",
                  icon: Calendar,
                  color: "green"
                },
                {
                  image: "/grouped_picture.JPG",
                  title: "Esprit d'Équipe",
                  description: "Collaboration et travail en équipe entre étudiants",
                  icon: Users,
                  color: "purple"
                },
                {
                  image: "/grouped_picture2.JPG",
                  title: "Activités Sportives",
                  description: "Sports et activités physiques sur le campus",
                  icon: Trophy,
                  color: "orange"
                },
                {
                  image: "/soutenance_img.JPG",
                  title: "Soutenances",
                  description: "Présentations de projets et soutenances académiques",
                  icon: GraduationCap,
                  color: "red"
                },
                {
                  image: "/teachers.JPG",
                  title: "Moments Conviviaux",
                  description: "Pauses café et moments de détente entre étudiants",
                  icon: Coffee,
                  color: "teal"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group overflow-hidden relative  rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-80">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Icon Badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 ${index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-green-500' :
                          index === 2 ? 'bg-purple-500' :
                            index === 3 ? 'bg-orange-500' :
                              index === 4 ? 'bg-red-500' :
                                'bg-teal-500'
                        } rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gallery Stats */}
            <div className="bg-gradient-to-r from-purple-900 to-green-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Vie Étudiante en Chiffres</h3>
                <p className="text-xl text-purple-200">Une communauté dynamique et engagée</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-white font-semibold">Événements</div>
                  <div className="text-purple-200 text-sm mt-1">Par année académique</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-white font-semibold">Clubs</div>
                  <div className="text-purple-200 text-sm mt-1">Associations étudiantes</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-white font-semibold">Participation</div>
                  <div className="text-purple-200 text-sm mt-1">Activités ouvertes à tous</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                  <div className="text-white font-semibold">Satisfaction</div>
                  <div className="text-purple-200 text-sm mt-1">Vie étudiante</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Étudiants - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              Services d'Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Services aux <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Étudiants</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Des services complets et modernes pour accompagner votre réussite académique et votre épanouissement personnel
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Bibliothèque",
                  description: "Ressources documentaires numériques et physiques avec espaces d'étude modernes",
                  color: "blue",
                  features: ["10,000+ ouvrages", "Accès numérique", "Espaces silencieux"]
                },
                {
                  icon: Lightbulb,
                  title: "Laboratoires",
                  description: "Équipements informatiques et scientifiques de dernière génération",
                  color: "green",
                  features: ["Équipements modernes", "Accès 24/7", "Support technique"]
                },
                {
                  icon: Target,
                  title: "Orientation",
                  description: "Conseil personnalisé et accompagnement dans votre parcours académique",
                  color: "orange",
                  features: ["Conseillers dédiés", "Suivi individuel", "Orientation carrière"]
                },
                {
                  icon: Globe,
                  title: "Stages",
                  description: "Opportunités de stages nationaux et internationaux avec nos partenaires",
                  color: "purple",
                  features: ["Réseau partenaires", "Stages à l'étranger", "Suivi personnalisé"]
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                      index === 1 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                        index === 2 ? 'bg-gradient-to-br from-orange-100 to-orange-200' :
                          'bg-gradient-to-br from-purple-100 to-purple-200'
                      } rounded-full -translate-y-16 translate-x-16 opacity-50`}></div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          index === 2 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                            'bg-gradient-to-r from-purple-500 to-purple-600'
                        } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-center leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center">
                            <CheckCircle className={`w-4 h-4 ${index === 0 ? 'text-blue-600' :
                              index === 1 ? 'text-green-600' :
                                index === 2 ? 'text-orange-600' :
                                  'text-purple-600'
                              } mr-2`} />
                            <span className="text-gray-600 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services Stats */}
            <div className="bg-gradient-to-r from-blue-900 to-orange-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Services en Chiffres</h3>
                <p className="text-xl text-blue-200">Un accompagnement complet et personnalisé</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-white font-semibold">Accès Services</div>
                  <div className="text-blue-200 text-sm mt-1">Disponibilité continue</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-white font-semibold">Accompagnement</div>
                  <div className="text-blue-200 text-sm mt-1">Étudiants suivis</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-white font-semibold">Partenaires Stages</div>
                  <div className="text-blue-200 text-sm mt-1">Entreprises</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-white font-semibold">Satisfaction</div>
                  <div className="text-blue-200 text-sm mt-1">Services étudiants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bourses et Aides - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Soutien Financier
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Bourses et <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Aides</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              L'UPCD s'engage à rendre l'éducation accessible grâce à ses partenariats stratégiques et programmes d'aide
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* FAFPA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-orange-400 text-center">FAFPA</h3>
                  <h4 className="text-xl font-semibold mb-6 text-center text-blue-200">
                    Fonds d'Appui à la Formation Professionnelle et à l'Apprentissage
                  </h4>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Possibilité de prise en charge des frais de formation pour les professionnels
                    souhaitant se perfectionner ou se reconvertir dans leur carrière.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span className="text-gray-300">Prise en charge totale ou partielle</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span className="text-gray-300">Formation continue</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span className="text-gray-300">Reconversion professionnelle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DSSA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-blue-400 text-center">DSSA</h3>
                  <h4 className="text-xl font-semibold mb-6 text-center text-orange-200">
                    Direction du Service Social des Armées
                  </h4>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    L'UPCD octroie des demi-bourses et bourses entières aux enfants des militaires
                    dans le cadre de ce partenariat privilégié et stratégique.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">Bourses entières disponibles</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">Demi-bourses accordées</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">Enfants de militaires</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bourses Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Aide Financière en Chiffres</h3>
                <p className="text-xl text-gray-300">Un soutien concret pour tous nos étudiants</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">60%</div>
                  <div className="text-white font-semibold">Étudiants Aidés</div>
                  <div className="text-gray-300 text-sm mt-1">Bénéficient d'une aide</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
                  <div className="text-white font-semibold">Partenaires</div>
                  <div className="text-gray-300 text-sm mt-1">FAFPA & DSSA</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-white font-semibold">Transparence</div>
                  <div className="text-gray-300 text-sm mt-1">Processus clair</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">0€</div>
                  <div className="text-white font-semibold">Frais Dossier</div>
                  <div className="text-gray-300 text-sm mt-1">Candidature gratuite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}