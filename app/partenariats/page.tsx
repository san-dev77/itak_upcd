import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Globe,
  Handshake,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Trophy,
  Heart,
  Building,
  Plane,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Briefcase,
} from "lucide-react";

export default function Partenariats() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
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
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-300 rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <Handshake className="w-4 h-4 mr-2" />
                Partenariats Stratégiques depuis 2016
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Nos
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Partenariats
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-300">
                  d&apos;Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Des collaborations stratégiques nationales et internationales
                pour offrir à nos étudiants les meilleures opportunités de
                formation et d&apos;insertion professionnelle.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/admission"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Rejoindre l&apos;UPCD
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Nous Contacter
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Partnership Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-white font-semibold">Partenaires</div>
                <div className="text-gray-300 text-sm mt-2">
                  Nationaux & Internationaux
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-500 mb-2">60%</div>
                <div className="text-white font-semibold">Étudiants Aidés</div>
                <div className="text-gray-300 text-sm mt-2">
                  Bourses & soutien
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-300 mb-2">
                  100+
                </div>
                <div className="text-white font-semibold">Stages Europe</div>
                <div className="text-gray-300 text-sm mt-2">
                  Opportunités annuelles
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-white font-semibold">Insertion Pro</div>
                <div className="text-gray-300 text-sm mt-2">
                  Grâce aux partenariats
                </div>
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

      {/* Introduction - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Globe className="w-4 h-4 mr-2" />
              Réseau International
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Une Ouverture sur le{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Monde
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              L&apos;UPCD a développé un réseau de partenariats stratégiques au
              niveau national et international pour offrir à ses étudiants les
              meilleures opportunités de formation et d&apos;insertion
              professionnelle.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* National */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                    Partenariats Nationaux
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-6">
                    Collaborations avec les institutions maliennes pour le
                    soutien financier et l&apos;accompagnement des étudiants
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        FAFPA - Formation professionnelle
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        DSSA - Bourses militaires
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* International */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                    Partenariats Internationaux
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-6">
                    Ouverture sur l&apos;Europe avec des opportunités de stages
                    et d&apos;échanges académiques enrichissants
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        CEDIFA - Stages en Espagne
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        Échanges académiques
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                    Impact sur l&apos;Insertion
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-6">
                    95% de nos diplômés trouvent un emploi grâce à notre réseau
                    de partenaires et aux opportunités offertes
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        Réseau professionnel élargi
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600 text-sm">
                        Expérience internationale
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Stats */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Notre Réseau en Chiffres
                </h3>
                <p className="text-xl text-blue-200">
                  Des partenariats qui font la différence
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    5+
                  </div>
                  <div className="text-white font-semibold">
                    Partenaires Actifs
                  </div>
                  <div className="text-blue-200 text-sm mt-1">
                    Nationaux & Internationaux
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
                  <div className="text-white font-semibold">Pays</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Mali, Espagne, Europe
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    100+
                  </div>
                  <div className="text-white font-semibold">Opportunités</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Stages & échanges annuels
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-white font-semibold">Insertion</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Taux d&apos;emploi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats Nationaux - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Building className="w-4 h-4 mr-2" />
              Partenaires Nationaux
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Partenariats{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Nationaux
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Des collaborations stratégiques avec les institutions maliennes
              pour soutenir financièrement nos étudiants
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* FAFPA */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">FAFPA</h3>
                      <p className="text-blue-200 text-lg">
                        Fonds d&apos;Appui à la Formation Professionnelle et à
                        l&apos;Apprentissage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-10 relative z-10">
                  <h4 className="text-2xl font-bold mb-6 text-gray-900">
                    Avantages du Partenariat
                  </h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Prise en charge totale ou partielle des frais de
                        formation pour les professionnels en activité
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Formations continues adaptées aux besoins évolutifs du
                        marché du travail
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Perfectionnement des compétences professionnelles et
                        techniques
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Accompagnement personnalisé dans la reconversion
                        professionnelle
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 font-medium leading-relaxed">
                        Ce partenariat stratégique permet aux professionnels en
                        activité de bénéficier d&apos;une formation de qualité
                        supérieure avec un soutien financier adapté à leur
                        situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DSSA */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-white backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                      <Award className="w-10 h-10 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">DSSA</h3>
                      <p className="text-blue-200 text-lg">
                        Direction du Service Social des Armées
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-10 relative z-10">
                  <h4 className="text-2xl font-bold mb-6 text-gray-900">
                    Bourses et Aides Financières
                  </h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Demi-bourses accordées aux enfants de militaires selon
                        les critères
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Bourses entières disponibles selon l&apos;éligibilité et
                        les besoins
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Accompagnement social complet des familles militaires
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        Facilités de paiement adaptées aux situations familiales
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 font-medium leading-relaxed">
                        Un partenariat privilégié qui témoigne de notre
                        engagement profond envers les familles au service de la
                        nation malienne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* National Partnership Stats */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Impact des Partenariats Nationaux
                </h3>
                <p className="text-xl text-blue-200">
                  Un soutien concret pour nos étudiants maliens
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    60%
                  </div>
                  <div className="text-white font-semibold">
                    Étudiants Aidés
                  </div>
                  <div className="text-blue-200 text-sm mt-1">
                    Bénéficient d&apos;un soutien
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">2</div>
                  <div className="text-white font-semibold">
                    Partenaires Clés
                  </div>
                  <div className="text-blue-200 text-sm mt-1">FAFPA & DSSA</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    100%
                  </div>
                  <div className="text-white font-semibold">Transparence</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Processus d&apos;attribution
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    0€
                  </div>
                  <div className="text-white font-semibold">Frais Dossier</div>
                  <div className="text-blue-200 text-sm mt-1">
                    Candidature gratuite
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats Internationaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Partenariats Internationaux
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Une ouverture sur l&apos;Europe pour enrichir votre parcours
              académique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* CEDIFA */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center mb-8">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Globe className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      CEDIFA
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      Centre Espagnol - Séville
                    </p>
                    <p className="text-gray-700 text-lg">
                      Un partenariat stratégique qui ouvre les portes de
                      l&apos;Europe à nos étudiants et notre personnel
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      Pour les Étudiants
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Plane className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Stages à Séville, Espagne</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Immersion culturelle européenne</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Expérience professionnelle internationale</span>
                      </li>
                      <li className="flex items-start">
                        <GraduationCap className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Enrichissement du parcours académique</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      Pour le Personnel
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Échanges pour les professeurs</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Formation continue en Europe</span>
                      </li>
                      <li className="flex items-start">
                        <Handshake className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Collaboration académique</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>Projets de recherche conjoints</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-inner">
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">
                    Impact du Partenariat
                  </h5>
                  <p className="text-gray-700">
                    Cette collaboration avec CEDIFA permet à l&apos;UPCD
                    d&apos;offrir une dimension internationale à ses formations,
                    préparant ainsi nos diplômés à évoluer dans un monde
                    globalisé. Les stages en Espagne constituent une opportunité
                    unique d&apos;acquérir une expérience européenne valorisante
                    sur le marché du travail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages des Partenariats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Avantages pour nos Étudiants
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Nos partenariats offrent des opportunités uniques pour enrichir
              votre parcours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Soutien Financier</h3>
              <p className="text-purple-200">
                Bourses et aides pour faciliter l&apos;accès à l&apos;éducation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Ouverture Internationale
              </h3>
              <p className="text-purple-200">
                Stages et échanges en Europe pour une expérience globale
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Insertion Professionnelle
              </h3>
              <p className="text-blue-200">
                Réseau professionnel élargi et opportunités d&apos;emploi
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence Académique</h3>
              <p className="text-blue-200">
                Formation enrichie par les échanges internationaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Profitez de nos Partenariats
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez l&apos;UPCD et bénéficiez de nos collaborations nationales
            et internationales pour enrichir votre parcours académique et
            professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Découvrir les opportunités
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
