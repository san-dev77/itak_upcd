import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  FlaskConical,
  Briefcase,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
  Code,
  Database,
  Cog,
  Building,
  Droplets,
  Mountain,
  Scale,
  TrendingUp,
  MessageSquare,
  Calculator,
  Plane,
  UserCheck,
  Gamepad2,
  Sprout,
  FolderOpen,
  CogIcon,
} from "lucide-react";

export default function Formations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                Excellence Académique depuis 2016
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
                  Nos
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Formations
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-300">
                  d&apos;Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Découvrez nos programmes académiques innovants conçus pour
                former les leaders de demain dans un environnement
                d&apos;apprentissage moderne et international.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/admission"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Candidater Maintenant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/tarifs"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Voir les Tarifs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Formation Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  20+
                </div>
                <div className="text-white font-semibold">Filières</div>
                <div className="text-gray-300 text-sm mt-2">FDECO & FAST</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-white font-semibold">Niveaux</div>
                <div className="text-gray-300 text-sm mt-2">
                  DUT, Licence, Master
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  85%
                </div>
                <div className="text-white font-semibold">Insertion Pro</div>
                <div className="text-gray-300 text-sm mt-2">
                  Dans les 6 mois
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-white font-semibold">Pratique</div>
                <div className="text-gray-300 text-sm mt-2">Stages inclus</div>
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

      {/* Structures de Formation - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Trois Structures d&apos;Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Structures
              </span>{" "}
              de Formation
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              L&apos;UPCD propose des formations de qualité à travers ses deux
              facultés d&apos;excellence et son centre de recherche innovant
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* FDECO */}
              <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">FDECO</h3>
                  <p className="text-blue-200 text-lg">
                    Faculté de Droit, d&apos;Économie et de Communication
                  </p>
                </div>

                <div className="p-8 relative z-10">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Formation complète et moderne dans les domaines juridiques,
                    économiques et de la communication avec une approche
                    pratique et professionnalisante.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        Formation théorique et pratique
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        Stages en entreprise
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        Encadrement personnalisé
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full text-lg font-bold inline-block">
                      14 Filières Spécialisées
                    </div>
                  </div>
                </div>
              </div>

              {/* FAST */}
              <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">FAST</h3>
                  <p className="text-green-200 text-lg">
                    Faculté des Sciences et des Technologies
                  </p>
                </div>

                <div className="p-8 relative z-10">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Formation technique et scientifique de pointe pour les
                    métiers d&apos;ingénieur et de technicien avec des
                    laboratoires modernes et équipements de dernière génération.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">
                        Laboratoires équipés
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Projets innovants</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">
                        Partenariats industriels
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-6 py-3 rounded-full text-lg font-bold inline-block">
                      6 Filières Techniques
                    </div>
                  </div>
                </div>
              </div>

              {/* CRFC */}
              <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">CRFC</h3>
                  <p className="text-orange-200 text-lg">
                    Centre de Recherche et de Formation Continue
                  </p>
                </div>

                <div className="p-8 relative z-10">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Recherche appliquée et formation continue pour les
                    professionnels en activité avec des programmes flexibles
                    adaptés aux besoins du marché du travail.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Recherche appliquée</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Formation flexible</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">
                        Perfectionnement professionnel
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-lg font-bold inline-block">
                      Formation Continue
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Excellence Académique en Chiffres
                </h3>
                <p className="text-xl text-gray-300">
                  Des résultats qui témoignent de notre qualité
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    20+
                  </div>
                  <div className="text-white font-semibold">Filières</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Programmes spécialisés
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                  <div className="text-white font-semibold">Structures</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Centres d&apos;excellence
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    100%
                  </div>
                  <div className="text-white font-semibold">Pratique</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Stages obligatoires
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    85%
                  </div>
                  <div className="text-white font-semibold">Insertion</div>
                  <div className="text-gray-300 text-sm mt-1">
                    Taux d&apos;emploi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FDECO Détails - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Scale className="w-4 h-4 mr-2" />
              Faculté d&apos;Excellence FDECO
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                FDECO
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Faculté de Droit, d&apos;Économie et de Communication
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              14 filières spécialisées pour former les futurs leaders dans les
              domaines juridiques, économiques et de la communication
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  code: "SJ",
                  name: "Sciences Juridiques",
                  icon: Scale,
                  color: "blue",
                  description:
                    "Formation complète en droit avec spécialisations",
                  image:
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "SPo",
                  name: "Sciences Politiques",
                  icon: Users,
                  color: "indigo",
                  description: "Analyse politique et relations internationales",
                  image:
                    "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "ETe",
                  name: "Étude du Terrorisme",
                  icon: Target,
                  color: "red",
                  description: "Sécurité et études stratégiques avancées",
                  image:
                    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "SEG",
                  name: "Sciences Économiques et de Gestion",
                  icon: TrendingUp,
                  color: "green",
                  description: "Économie moderne et gestion d&apos;entreprise",
                  image:
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "MaM",
                  name: "Marketing-Management",
                  icon: Briefcase,
                  color: "purple",
                  description: "Stratégies marketing et management moderne",
                  image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "JC",
                  name: "Journalisme Communication",
                  icon: MessageSquare,
                  color: "pink",
                  description: "Médias, communication et journalisme digital",
                  image:
                    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "FC",
                  name: "Finances Comptabilité",
                  icon: Calculator,
                  color: "yellow",
                  description: "Expertise financière et comptable",
                  image:
                    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "Banq",
                  name: "Banque",
                  icon: Building,
                  color: "teal",
                  description: "Services bancaires et finance moderne",
                  image:
                    "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "LTT",
                  name: "Logistique, Transit, Transport",
                  icon: Plane,
                  color: "orange",
                  description: "Chaîne logistique et transport international",
                  image:
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "GRH",
                  name: "Gestion des Ressources Humaines",
                  icon: UserCheck,
                  color: "blue",
                  description: "Management RH et développement des talents",
                  image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "GS",
                  name: "Gestion Sportive",
                  icon: Gamepad2,
                  color: "green",
                  description: "Management du sport et événementiel",
                  image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "CI",
                  name: "Commerce International",
                  icon: Globe,
                  color: "indigo",
                  description: "Commerce mondial et relations d&apos;affaires",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "Ab",
                  name: "Agro-business",
                  icon: Sprout,
                  color: "green",
                  description: "Agriculture moderne et business agricole",
                  image:
                    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  code: "GP",
                  name: "Gestion des Projets",
                  icon: FolderOpen,
                  color: "purple",
                  description: "Management de projets et innovation",
                  image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
              ].map((filiere, index) => {
                const IconComponent = filiere.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                  >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={filiere.image}
                        alt={filiere.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div
                        className={`absolute top-4 left-4 bg-${filiere.color}-100 text-${filiere.color}-800 px-3 py-1 rounded-full text-sm font-bold`}
                      >
                        {filiere.code}
                      </div>
                    </div>

                    <div className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-${filiere.color}-500 to-${filiere.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {filiere.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {filiere.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-gray-700 font-medium">
                            Stages inclus
                          </span>
                        </div>
                        <div className="text-blue-600 font-bold text-xs">
                          DUT • Licence • Master
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FDECO Image Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Étudiants FDECO - Formation en Droit et Économie"
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Excellence FDECO
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nos étudiants FDECO bénéficient d&apos;une formation
                    complète alliant théorie et pratique, avec des stages en
                    entreprise et un accompagnement personnalisé vers
                    l&apos;excellence.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-900">14</div>
                      <div className="text-blue-700 font-semibold">
                        Filières
                      </div>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-indigo-900">
                        600+
                      </div>
                      <div className="text-indigo-700 font-semibold">
                        Étudiants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FDECO Stats */}
            <div className="mt-20 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">FDECO en Chiffres</h3>
                <p className="text-xl text-blue-200">
                  Une faculté d&apos;excellence reconnue
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    14
                  </div>
                  <div className="text-white font-semibold">Filières</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Spécialisations diverses
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    600+
                  </div>
                  <div className="text-white font-semibold">Étudiants</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Inscrits FDECO
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    90%
                  </div>
                  <div className="text-white font-semibold">Insertion</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Taux d&apos;emploi
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    50+
                  </div>
                  <div className="text-white font-semibold">Partenaires</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Entreprises stages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAST Détails - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <FlaskConical className="w-4 h-4 mr-2" />
              Faculté Technique FAST
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                FAST
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Faculté des Sciences et des Technologies
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              6 filières techniques de pointe pour former les ingénieurs et
              techniciens de demain avec des équipements modernes
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  code: "MIAGE",
                  name: "Sciences Informatiques",
                  icon: Code,
                  color: "blue",
                  description:
                    "Formation complète en développement logiciel et systèmes",
                  specializations: [
                    "Génie Logiciel",
                    "Réseau Télécommunication",
                    "Administration base de données",
                  ],
                },
                {
                  code: "IG",
                  name: "Informatique de Gestion",
                  icon: Database,
                  color: "purple",
                  description:
                    "Systèmes d&apos;information et gestion informatisée moderne",
                  specializations: [
                    "ERP",
                    "Business Intelligence",
                    "Audit Informatique",
                  ],
                },
                {
                  code: "GI",
                  name: "Génie Industriel",
                  icon: Cog,
                  color: "orange",
                  description:
                    "Ingénierie industrielle et optimisation des processus",
                  specializations: [
                    "Lean Manufacturing",
                    "Qualité",
                    "Supply Chain",
                  ],
                },
                {
                  code: "GC",
                  name: "Génie Civil",
                  icon: CogIcon,
                  color: "red",
                  description: "Construction, infrastructure et génie urbain",
                  specializations: ["BTP", "Urbanisme", "Structures"],
                },
                {
                  code: "Hydro",
                  name: "Hydrologie",
                  icon: Droplets,
                  color: "blue",
                  description: "Gestion des ressources en eau et environnement",
                  specializations: [
                    "Hydraulique",
                    "Assainissement",
                    "Environnement",
                  ],
                },
                {
                  code: "Min",
                  name: "Mines",
                  icon: Mountain,
                  color: "yellow",
                  description: "Exploitation minière et géologie appliquée",
                  specializations: ["Géologie", "Extraction", "Traitement"],
                },
              ].map((filiere, index) => {
                const IconComponent = filiere.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${filiere.color}-800 to-${filiere.color}-900 rounded-full -translate-y-16 translate-x-16 opacity-50`}
                    ></div>

                    <div className="relative z-50">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r from-${filiere.color}-500 to-${filiere.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent
                          className={`w-8 h-8 text-white bg-gradient-to-r from-${filiere.color}-500 to-${filiere.color}-600`}
                        />
                      </div>

                      <div
                        className={`bg-${filiere.color}-600 text-${filiere.color}-100 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4`}
                      >
                        {filiere.code}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {filiere.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {filiere.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {filiere.specializations.map((spec, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm text-gray-600">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex z-50 items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-gray-600">
                            Laboratoires équipés
                          </span>
                        </div>
                        <div
                          className={`text-${filiere.color}-600 z-50 font-semibold text-sm`}
                        >
                          DUT • Licence • Master
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAST Image Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Innovation FAST
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La FAST forme les ingénieurs et techniciens de demain avec
                    des laboratoires modernes, des équipements de pointe et des
                    projets innovants en partenariat avec l&apos;industrie.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-900">6</div>
                      <div className="text-green-700 font-semibold">
                        Filières Tech
                      </div>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-teal-900">
                        10+
                      </div>
                      <div className="text-teal-700 font-semibold">
                        Laboratoires
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl blur opacity-20"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Laboratoires FAST - Formation Technique et Scientifique"
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FAST Stats */}
            <div className="mt-20 bg-gradient-to-r from-green-900 to-teal-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">FAST en Chiffres</h3>
                <p className="text-xl text-green-200">
                  Excellence technique et innovation
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    6
                  </div>
                  <div className="text-white font-semibold">Filières</div>
                  <div className="text-green-200 text-sm mt-1">
                    Spécialisations techniques
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    400+
                  </div>
                  <div className="text-white font-semibold">Étudiants</div>
                  <div className="text-green-200 text-sm mt-1">
                    Inscrits FAST
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    95%
                  </div>
                  <div className="text-white font-semibold">Insertion</div>
                  <div className="text-green-200 text-sm mt-1">
                    Taux d&apos;emploi technique
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    10+
                  </div>
                  <div className="text-white font-semibold">Laboratoires</div>
                  <div className="text-green-200 text-sm mt-1">
                    Équipements modernes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niveaux de Formation - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4 mr-2" />
              Parcours Académique Complet
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Nos{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Niveaux
              </span>{" "}
              de Formation
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              L&apos;UPCD délivre trois niveaux de diplômes reconnus par
              l&apos;État avec une progression académique structurée
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* DUT */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-orange-200/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>

                  <div className="text-6xl font-bold text-orange-400 mb-4">
                    DUT
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Bac+2</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    4 semestres après le Baccalauréat avec formation pratique
                    intensive
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-300">
                        Formation professionnalisante
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-300">Stages obligatoires</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-300">Insertion immédiate</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full inline-block font-semibold">
                    Diplôme Universitaire de Technologie
                  </div>
                </div>
              </div>

              {/* Licence */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>

                  <div className="text-6xl font-bold text-blue-400 mb-4">
                    Licence
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Bac+3</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    6 semestres après le Baccalauréat avec spécialisation
                    approfondie
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-gray-300">
                        Spécialisation avancée
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-gray-300">
                        Projets de fin d&apos;études
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-gray-300">Poursuite en Master</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full inline-block font-semibold">
                    Licence Professionnelle
                  </div>
                </div>
              </div>

              {/* Master */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-purple-200/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-white">5</span>
                  </div>

                  <div className="text-6xl font-bold text-purple-400 mb-4">
                    Master
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Bac+5</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    4 semestres après la Licence avec expertise de haut niveau
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-gray-300">Expertise de pointe</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-gray-300">Recherche appliquée</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-gray-300">Leadership</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block font-semibold">
                    Master Professionnel
                  </div>
                </div>
              </div>
            </div>

            {/* Progression Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-center mb-12">
                Parcours de Progression
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Baccalauréat</h4>
                  <p className="text-gray-300 text-sm">Point de départ</p>
                </div>

                <ArrowRight className="w-8 h-8 text-orange-400 hidden md:block" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">DUT (Bac+2)</h4>
                  <p className="text-gray-300 text-sm">Formation technique</p>
                </div>

                <ArrowRight className="w-8 h-8 text-blue-400 hidden md:block" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Licence (Bac+3)</h4>
                  <p className="text-gray-300 text-sm">Spécialisation</p>
                </div>

                <ArrowRight className="w-8 h-8 text-purple-400 hidden md:block" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Master (Bac+5)</h4>
                  <p className="text-gray-300 text-sm">Expertise</p>
                </div>

                <ArrowRight className="w-8 h-8 text-green-400 hidden md:block" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Carrière</h4>
                  <p className="text-gray-300 text-sm">Succès professionnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-white/20">
                <Star className="w-4 h-4 mr-2" />
                Rejoignez l&apos;Excellence
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Prêt à{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Transformer
                </span>{" "}
                votre Avenir ?
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Découvrez nos programmes d&apos;excellence et commencez votre
                parcours vers le succès avec l&apos;UPCD, où l&apos;avenir
                c&apos;est aujourd&apos;hui.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Candidater Maintenant
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  Rejoignez nos 1000+ étudiants et bénéficiez d&apos;une
                  formation d&apos;excellence avec 85% d&apos;insertion
                  professionnelle.
                </p>
                <div className="text-center">
                  <Link
                    href="/admission"
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center"
                  >
                    Commencer ma Candidature
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Découvrir nos Tarifs
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  Consultez nos tarifs compétitifs et nos facilités de paiement
                  pour rendre l&apos;excellence accessible à tous.
                </p>
                <div className="text-center">
                  <Link
                    href="/tarifs"
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center"
                  >
                    Voir les Tarifs
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-center mb-8">
                Besoin d&apos;Informations ?
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Rendez-vous Personnalisé
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Rencontrez nos conseillers d&apos;orientation
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Brochure Complète</h4>
                  <p className="text-gray-300 text-sm">
                    Recevez toutes nos informations détaillées
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Visite du Campus</h4>
                  <p className="text-gray-300 text-sm">
                    Découvrez nos installations modernes
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center"
                >
                  Nous Contacter
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Final Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  20+
                </div>
                <div className="text-white font-semibold">Filières</div>
                <div className="text-gray-300 text-sm mt-1">
                  Programmes d&apos;excellence
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  1000+
                </div>
                <div className="text-white font-semibold">Étudiants</div>
                <div className="text-gray-300 text-sm mt-1">
                  Communauté dynamique
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  85%
                </div>
                <div className="text-white font-semibold">Insertion Pro</div>
                <div className="text-gray-300 text-sm mt-1">
                  Taux d&apos;emploi
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  98%
                </div>
                <div className="text-white font-semibold">Satisfaction</div>
                <div className="text-gray-300 text-sm mt-1">
                  Étudiants satisfaits
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
