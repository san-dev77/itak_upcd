import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, Globe, Users, Award, BookOpen, Lightbulb, Target, 
  Calendar, MapPin, GraduationCap, FlaskConical, Briefcase, 
  ArrowRight, CheckCircle, Star, Trophy, Heart, Zap
} from "lucide-react";

export default function Presentation() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <Building2 className="w-4 h-4 mr-2" />
                Université d'Excellence depuis 2016
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent">
                  L'UPCD
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-300">
                  Université Privée
                </span>
                <br />
                <span className="text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Cheickné DIALLO
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Une institution d'excellence académique au cœur de Kati, formant les leaders de demain 
                dans un environnement international avec des programmes innovants.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/formations"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Nos Formations
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

            {/* Right Content - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-orange-400 mb-2">2016</div>
                <div className="text-white font-semibold">Année de Création</div>
                <div className="text-gray-300 text-sm mt-2">Autorisation officielle</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-white font-semibold">Facultés</div>
                <div className="text-gray-300 text-sm mt-2">FDECO & FAST</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-white font-semibold">Filières</div>
                <div className="text-gray-300 text-sm mt-2">DUT, Licence, Master</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-white font-semibold">Satisfaction</div>
                <div className="text-gray-300 text-sm mt-2">Étudiants satisfaits</div>
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

      {/* Histoire Section - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Calendar className="w-4 h-4 mr-2" />
              Notre Parcours depuis 2016
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Une <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Histoire</span> d'Excellence
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment l'UPCD est devenue une référence en matière d'enseignement supérieur au Mali
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Timeline Content */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
                  
                  <div className="pl-12 space-y-12">
                    {/* 2016 */}
                    <div className="relative">
                      <div className="absolute -left-14 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">2016</div>
                          <Award className="w-6 h-6 text-blue-500 ml-4" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Création Officielle</h3>
                        <p className="text-gray-700 mb-4">
                          Décision de création N° 0000079/MESRS-SG du 10 août 2016 par le Ministère de l'Enseignement Supérieur
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-blue-800 font-semibold">Vision fondatrice : Former les leaders de demain</p>
                        </div>
                      </div>
                    </div>

                    {/* 2018 */}
                    <div className="relative">
                      <div className="absolute -left-14 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold">2018</div>
                          <Building2 className="w-6 h-6 text-orange-500 ml-4" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Ouverture du Campus</h3>
                        <p className="text-gray-700 mb-4">
                          Autorisation d'ouverture Arrêté N°2018-4220/MEN-SG du 04 décembre 2018
                        </p>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <p className="text-orange-800 font-semibold">Inauguration du campus moderne de Kati</p>
                        </div>
                      </div>
                    </div>

                    {/* Aujourd'hui */}
                    <div className="relative">
                      <div className="absolute -left-14 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">2025</div>
                          <Trophy className="w-6 h-6 text-green-500 ml-4" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence Reconnue</h3>
                        <p className="text-gray-700 mb-4">
                          Université de référence avec 2 facultés, 15+ filières et des partenariats internationaux
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-800 font-semibold">"Avec l'UPCD, l'avenir c'est aujourd'hui"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image and Stats */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur opacity-20"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                    <Image
                      src="/grouped_picture.JPG"
                      alt="Campus UPCD - Étudiants"
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-blue-900">Kati</div>
                    <div className="text-blue-700">Centre-ville</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-orange-900">1000+</div>
                    <div className="text-orange-700">Étudiants</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200">
                    <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-green-900">500+</div>
                    <div className="text-green-700">Diplômés</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200">
                    <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-purple-900">5+</div>
                    <div className="text-purple-700">Partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              Notre Vision d'Avenir
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Une <span className="bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">Vision</span> Internationale
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Former les leaders de demain dans un monde globalisé et interconnecté
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Vision Content */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Vision Globale</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      L'UPCD vise à permettre à ses étudiants de se pencher sur les enjeux complexes de l'activité 
                      des entreprises, des institutions publiques, des organisations gouvernementales et 
                      non-gouvernementales, la diplomatie, et la politique moderne.
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-2xl border border-purple-100">
                      <p className="text-purple-800 font-semibold text-lg">
                        "Préparer nos étudiants à vivre et à travailler dans un environnement international"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Entreprises</h4>
                    <p className="text-gray-600 text-sm">Comprendre les enjeux du monde des affaires</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <Building2 className="w-8 h-8 text-green-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Institutions</h4>
                    <p className="text-gray-600 text-sm">Maîtriser le fonctionnement institutionnel</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <Globe className="w-8 h-8 text-purple-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Diplomatie</h4>
                    <p className="text-gray-600 text-sm">Développer une vision internationale</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <Users className="w-8 h-8 text-orange-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">ONG</h4>
                    <p className="text-gray-600 text-sm">S'engager dans le développement social</p>
                  </div>
                </div>
              </div>

              {/* Right - Image and Stats */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-3xl blur opacity-20"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                    <Image
                      src="/grouped_picture2.JPG"
                      alt="Étudiants UPCD - Vision internationale"
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Vision Stats */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact de Notre Vision</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Formation Internationale</div>
                        <div className="text-gray-600 text-sm">Programmes alignés sur les standards mondiaux</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Partenariats Stratégiques</div>
                        <div className="text-gray-600 text-sm">Collaborations avec des universités internationales</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Employabilité Globale</div>
                        <div className="text-gray-600 text-sm">Diplômés prêts pour le marché international</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              Six Missions Fondamentales
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Nos <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Missions</span> d'Excellence
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              L'UPCD s'engage dans six missions stratégiques pour l'excellence académique et le développement durable
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Mission 1 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Enseignement Supérieur</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Formation de qualité dans l'enseignement supérieur avec des programmes adaptés aux besoins du marché du travail moderne
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Excellence Académique
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission 2 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Sciences & Technologies</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Enseignement scientifique et technologique de pointe pour former les ingénieurs et techniciens de demain
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Innovation Technique
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission 3 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Formation Professionnelle</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Perfectionnement des cadres supérieurs et formation continue pour les professionnels en activité
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Développement Continu
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission 4 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Recherche Scientifique</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Recherche fondamentale et appliquée avec diffusion des résultats pour l'avancement des connaissances
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Recherche Avancée
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission 5 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Innovation Technologique</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Développement de l'innovation technologique pour répondre aux défis contemporains et futurs
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Technologies Émergentes
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission 6 */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Solutions pour l'Afrique</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Recherche de solutions innovantes pour relever les défis majeurs auxquels sont confrontés l'Afrique et le Mali
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Impact Continental
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Impact Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Impact de Nos Missions</h3>
                <p className="text-xl text-gray-300">Des résultats concrets au service de l'excellence</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">6</div>
                  <div className="text-white font-semibold">Missions Stratégiques</div>
                  <div className="text-gray-300 text-sm mt-1">Axes d'excellence</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-white font-semibold">Programmes</div>
                  <div className="text-gray-300 text-sm mt-1">Formations spécialisées</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-white font-semibold">Engagement</div>
                  <div className="text-gray-300 text-sm mt-1">Vers l'excellence</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                  <div className="text-white font-semibold">Possibilités</div>
                  <div className="text-gray-300 text-sm mt-1">Pour nos étudiants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-orange-300 rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-white/20">
                <Heart className="w-4 h-4 mr-2" />
                Notre Devise Inspirante
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-200">
                Notre <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Slogan</span>
              </h2>
              
              {/* Main Slogan */}
              <div className="relative mb-16">
                <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                  <div className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                      "Avec l'UPCD,
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                      l'avenir c'est
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                      aujourd'hui"
                    </span>
                  </div>
                  
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Ce slogan reflète notre engagement profond à préparer nos étudiants aux défis de demain 
                    en leur offrant une formation d'excellence et des opportunités concrètes dès aujourd'hui.
                  </p>
                </div>
              </div>
            </div>

            {/* Slogan Impact Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Aujourd'hui</h3>
                <p className="text-gray-300 leading-relaxed">
                  Formation immédiate avec des compétences pratiques et des opportunités concrètes pour nos étudiants
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">L'Avenir</h3>
                <p className="text-gray-300 leading-relaxed">
                  Préparation stratégique aux métiers de demain avec une vision prospective et innovante
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Standards internationaux et qualité académique reconnue pour une formation d'élite
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h3 className="text-3xl font-bold mb-6">Rejoignez l'Excellence</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Découvrez comment l'UPCD peut transformer votre avenir dès aujourd'hui avec nos programmes d'excellence
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/admission"
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Candidater Maintenant
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href="/formations"
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Découvrir nos Formations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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