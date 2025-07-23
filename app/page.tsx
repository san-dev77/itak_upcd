import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Globe, Briefcase, GraduationCap, FlaskConical, Users, Lightbulb, Earth,
  Award, BookOpen, CheckCircle, ArrowRight,
  StarsIcon
} from "lucide-react";
import { Star, Stars } from "lucide";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Stats - Completely Redesigned */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              Excellence Académique en Chiffres
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              L'<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">UPCD</span> en Chiffres
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Des résultats concrets qui témoignent de notre excellence académique et de notre engagement
              envers la réussite de nos étudiants dans un environnement d'apprentissage moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Facultés */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">2</div>
                  <h3 className="text-xl font-bold text-white mb-2">Facultés d'Excellence</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    FDECO & FAST offrant des formations complètes et reconnues
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Filières */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <StarsIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">20+</div>
                  <h3 className="text-xl font-bold text-white mb-2">Filières Spécialisées</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Formations diversifiées adaptées aux besoins du marché
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Diplômes */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">3</div>
                  <h3 className="text-xl font-bold text-white mb-2">Niveaux de Diplômes</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    DUT, Licence et Master pour une progression complète
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Étudiants */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">1000+</div>
                  <h3 className="text-xl font-bold text-white mb-2">Étudiants Actifs</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Communauté dynamique et multiculturelle engagée
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-white font-semibold">Taux d'Insertion</p>
              <p className="text-blue-200 text-sm mt-1">Professionnelle</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-indigo-400 mb-2">15+</div>
              <p className="text-white font-semibold">Années d'Expérience</p>
              <p className="text-blue-200 text-sm mt-1">Formation d'Excellence</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <p className="text-white font-semibold">Partenaires</p>
              <p className="text-blue-200 text-sm mt-1">Entreprises & Institutions</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section - Redesigned with Images */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Excellence Académique
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi choisir l'<span className="text-blue-600">UPCD</span> ?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Une université moderne qui forme les leaders de demain grâce à un enseignement d'excellence,
              des partenariats internationaux et un accompagnement personnalisé vers la réussite professionnelle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 - Campus Moderne */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <Image
                    src="/grouped_picture.JPG"
                    alt="Campus moderne UPCD"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Campus Moderne</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Situé au centre-ville de Kati, notre campus ultramoderne dispose d'équipements de pointe :
                  laboratoires informatiques, bibliothèque numérique, salles de conférence équipées et espaces de détente.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  <span>Découvrir le campus</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 - Ouverture Internationale */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <Image
                    src="/teachers.JPG"
                    alt="Partenariats internationaux"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ouverture Internationale</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Partenariats privilégiés avec l'Espagne (CEDIFA), opportunités de stages à Séville,
                  échanges académiques et programmes de mobilité internationale pour une formation globale.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  <span>Voir les partenariats</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 - Insertion Professionnelle */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <Image
                    src="/soutenance_img.JPG"
                    alt="Insertion professionnelle"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Insertion Professionnelle</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Taux d'insertion de 85% grâce à nos partenariats entreprises, stages obligatoires,
                  accompagnement personnalisé et réseau d'anciens diplômés actifs dans tous les secteurs.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                  <span>Voir les débouchés</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section - Completely Redesigned */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              Notre Engagement pour l'Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Missions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              L'UPCD s'engage dans six missions fondamentales pour l'excellence académique,
              l'innovation technologique et le développement durable de l'Afrique et du Mali.
            </p>
          </div>

          {/* Missions Grid with enhanced design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Mission 1 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Enseignement Supérieur</h3>
                    <div className="w-12 h-0.5 bg-blue-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Formation de qualité dans l'enseignement supérieur avec des programmes académiques
                  rigoureux et adaptés aux standards internationaux pour préparer les futurs leaders.
                </p>
              </div>
            </div>

            {/* Mission 2 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FlaskConical className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Recherche Scientifique</h3>
                    <div className="w-12 h-0.5 bg-indigo-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Recherche fondamentale et appliquée avec diffusion des résultats pour contribuer
                  à l'avancement des connaissances et au développement technologique.
                </p>
              </div>
            </div>

            {/* Mission 3 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Users className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Formation Professionnelle</h3>
                    <div className="w-12 h-0.5 bg-blue-600 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Perfectionnement des cadres supérieurs et formation continue pour répondre
                  aux besoins évolutifs du marché du travail et des entreprises.
                </p>
              </div>
            </div>

            {/* Mission 4 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Innovation Technologique</h3>
                    <div className="w-12 h-0.5 bg-cyan-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Développement de l'innovation technologique pour créer des solutions
                  durables et favoriser l'entrepreneuriat dans les secteurs d'avenir.
                </p>
              </div>
            </div>

            {/* Mission 5 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Earth className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Solutions pour l'Afrique</h3>
                    <div className="w-12 h-0.5 bg-sky-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Recherche de solutions innovantes pour relever les défis majeurs auxquels
                  est confronté l'Afrique et le Mali en particulier.
                </p>
              </div>
            </div>

            {/* Mission 6 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FlaskConical className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sciences & Technologies</h3>
                    <div className="w-12 h-0.5 bg-indigo-500 mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Enseignement scientifique et technologique de pointe avec des laboratoires
                  modernes et des équipements à la fine pointe de la technologie.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Rejoignez Notre Mission</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Participez à notre vision d'excellence académique et contribuez au développement
                durable de l'Afrique à travers l'éducation et l'innovation.
              </p>
              <Link
                href="/presentation"
                className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <span>En savoir plus sur l'UPCD</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section - Redesigned */}
      <section id="formations" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Formations d'Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Formations</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              L'UPCD propose des formations de qualité reconnues à travers ses deux facultés d'excellence
              et son centre de recherche, avec des programmes adaptés aux besoins du marché du travail.
            </p>
          </div>

          {/* Facultés Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* FDECO Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-3">FDECO</h3>
                <p className="text-lg text-blue-800 font-semibold mb-4">
                  Faculté de Droit, d'Économie et de Communication
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Formation complète dans les domaines juridiques, économiques et de la communication
                  avec 14 filières spécialisées pour répondre aux besoins du secteur tertiaire.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Sciences Juridiques (SJ)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Sciences Politiques (SPo)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Étude du Terrorisme (ETe)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Sciences Économiques et Gestion (SEG)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Marketing-Management (MaM)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Journalisme Communication (JC)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Finances Comptabilité (FC)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Banque (Banq)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Logistique, Transit, Transport (LTT)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Gestion Ressources Humaines (GRH)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Gestion Sportive (GS)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Commerce International (CI)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Agro-business (Ab)</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Gestion des Projets (GP)</span>
                  </div>
                </div>
              </div>

              <Link href="/formations" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                <span>Découvrir FDECO</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* FAST Card */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-200">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-indigo-900 mb-3">FAST</h3>
                <p className="text-lg text-indigo-800 font-semibold mb-4">
                  Faculté des Sciences et des Technologies
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Formation technique et scientifique de pointe pour les métiers d'ingénieur et de technicien
                  avec 6 filières spécialisées dans les domaines technologiques d'avenir.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white bg-opacity-60 rounded-xl p-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Sciences Informatiques (MIAGE)</h4>
                      <p className="text-sm text-gray-700">Génie Logiciel, Réseau Télécommunication, Administration base de données</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Informatique de Gestion (IG)</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Génie Industrie (GI)</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Génie Civil (GC)</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Hydrologie (Hydro)</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Mines (Min)</span>
                </div>
              </div>

              <Link href="/formations" className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-900 transition-colors">
                <span>Découvrir FAST</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CRFC Section */}
          <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-3xl p-8 mb-16 border border-cyan-200 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mr-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-900 mb-2">CRFC</h3>
                <p className="text-lg text-cyan-800 font-semibold">Centre de Recherche et de Formation Continue</p>
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              À travers ce Centre d'excellence, l'UPCD mène des études de recherche appliquée et offre aux professionnels
              en activité des opportunités de formation continue, de perfectionnement et de reconversion professionnelle
              adaptées aux évolutions du marché du travail.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-200 text-cyan-800 rounded-full text-sm font-medium">Formation Continue</span>
              <span className="px-4 py-2 bg-cyan-200 text-cyan-800 rounded-full text-sm font-medium">Recherche Appliquée</span>
              <span className="px-4 py-2 bg-cyan-200 text-cyan-800 rounded-full text-sm font-medium">Perfectionnement</span>
              <span className="px-4 py-2 bg-cyan-200 text-cyan-800 rounded-full text-sm font-medium">Reconversion</span>
            </div>
          </div>

          {/* Niveaux de Formation - Completely Redesigned */}
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  Parcours Académique
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Niveaux de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Formation</span>
                </h3>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                  Trois niveaux de diplômes reconnus par l'État pour une progression académique complète
                  et une insertion professionnelle garantie
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* DUT Card */}
                <div className="group relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-3 shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                        DUT
                      </div>
                      <h4 className="text-3xl font-bold mb-2 text-white">Bac+2</h4>
                      <p className="text-blue-200 mb-6 text-lg">4 semestres après le Baccalauréat</p>

                      <div className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl p-4 mb-6 border border-blue-400/30">
                        <p className="font-semibold text-blue-100 mb-2">Diplôme Universitaire de Technologie</p>
                        <p className="text-sm text-blue-200">Formation technique et professionnelle</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Insertion professionnelle immédiate</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Poursuite d'études en Licence</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Stages en entreprise</span>
                        </div>
                      </div>

                      <div className="bg-blue-500/20 rounded-lg p-3">
                        <div className="text-2xl font-bold text-orange-400">500K</div>
                        <div className="text-xs text-blue-200">FCFA/an</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Licence Card - Featured */}
                <div className="group relative transform scale-105">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-4 shadow-xl">
                        <StarsIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="absolute -top-3 right-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ POPULAIRE
                    </div>

                    <div className="text-center pt-6">
                      <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                        LIC
                      </div>
                      <h4 className="text-3xl font-bold mb-2 text-white">Bac+3</h4>
                      <p className="text-blue-200 mb-6 text-lg">6 semestres après le Baccalauréat</p>

                      <div className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl p-4 mb-6 border border-blue-400/30">
                        <p className="font-semibold text-blue-100 mb-2">Licence Professionnelle</p>
                        <p className="text-sm text-blue-200">Formation complète et spécialisée</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>85% d'insertion professionnelle</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Accès direct au Master</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Stages internationaux</span>
                        </div>
                      </div>

                      <div className="bg-blue-500/20 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-400">600K</div>
                        <div className="text-xs text-blue-200">FCFA/an</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Master Card */}
                <div className="group relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-full p-3 shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                        MST
                      </div>
                      <h4 className="text-3xl font-bold mb-2 text-white">Bac+5</h4>
                      <p className="text-purple-200 mb-6 text-lg">4 semestres après la Licence</p>

                      <div className="bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-xl p-4 mb-6 border border-purple-400/30">
                        <p className="font-semibold text-purple-100 mb-2">Master Professionnel</p>
                        <p className="text-sm text-purple-200">Formation d'expertise et de leadership</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center text-sm text-purple-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Postes de cadres supérieurs</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-purple-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Recherche et innovation</span>
                        </div>
                        <div className="flex items-center justify-center text-sm text-purple-100">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Entrepreneuriat</span>
                        </div>
                      </div>

                      <div className="bg-purple-500/20 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-400">750K</div>
                        <div className="text-xs text-purple-200">FCFA/an</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progression Path */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <ArrowRight className="w-6 h-6 text-orange-400" />
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">Votre Parcours vers l'Excellence</h4>
                  <p className="text-blue-200 max-w-2xl mx-auto mb-8">
                    Un parcours progressif et structuré pour vous mener du DUT au Master,
                    avec des possibilités d'insertion à chaque étape.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/tarifs"
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                      <span>Voir les tarifs détaillés</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/admission"
                      className="inline-flex items-center border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
                    >
                      <span>Commencer mon admission</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats Section - Completely Redesigned */}
      <section id="partenariats" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Globe className="w-4 h-4 mr-2" />
              Réseau International
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Partenariats</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Des collaborations stratégiques nationales et internationales pour enrichir votre parcours
              académique et ouvrir de nouvelles opportunités professionnelles.
            </p>
          </div>

          {/* Partenariats Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Partenariats Nationaux */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Partenariats Nationaux
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Soutien Local</h3>
              </div>

              {/* FAFPA Card */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-green-700"></div>
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">FAFPA</h4>
                      <p className="text-green-700 font-semibold text-lg mb-4">
                        Fonds d'Appui à la Formation Professionnelle et à l'Apprentissage
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Partenariat privilégié permettant la prise en charge jusqu'à 100% des frais de formation
                    pour les professionnels en activité souhaitant se perfectionner ou se reconvertir.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Prise en charge totale possible</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Formation continue</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Perfectionnement professionnel</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Reconversion facilitée</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800 font-semibold">Taux de prise en charge</span>
                      <span className="text-2xl font-bold text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DSSA Card */}
              <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">DSSA</h4>
                      <p className="text-blue-700 font-semibold text-lg mb-4">
                        Direction du Service Social des Armées
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Partenariat social permettant l'octroi de demi-bourses et bourses entières aux enfants
                    de militaires, témoignant de notre engagement envers les familles au service de la nation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Demi-bourses disponibles</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Bourses entières</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Accompagnement social</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Facilités de paiement</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800 font-semibold">Familles bénéficiaires</span>
                      <span className="text-2xl font-bold text-blue-600">200+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partenariats Internationaux */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  Partenariats Internationaux
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ouverture Mondiale</h3>
              </div>

              {/* CEDIFA Card - Enhanced */}
              <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-indigo-200">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl font-bold">🇪🇸</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">CEDIFA</h4>
                      <p className="text-indigo-700 font-semibold text-xl mb-2">Centre Espagnol - Séville</p>
                      <p className="text-gray-600">Partenariat stratégique européen</p>
                    </div>
                  </div>

                  <p className="text-gray-800 text-lg leading-relaxed mb-8">
                    Partenariat privilégié qui ouvre les portes de l'Europe à nos étudiants, professeurs
                    et personnel administratif avec des opportunités uniques de formation internationale.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 text-indigo-500 mr-2" />
                        Pour les Étudiants
                      </h5>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Stages à Séville</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Immersion culturelle</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Expérience européenne</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 text-indigo-500 mr-2" />
                        Pour le Personnel
                      </h5>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Échanges professeurs</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Formation continue</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">Projets de recherche</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-100 to-blue-100 border border-indigo-300 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-indigo-800 font-bold text-lg">Étudiants en mobilité</span>
                      <span className="text-3xl font-bold text-indigo-600">50+</span>
                    </div>
                    <p className="text-indigo-700 text-sm">
                      Chaque année, nos étudiants bénéficient de cette opportunité unique d'enrichir
                      leur parcours avec une expérience internationale valorisante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Profitez de nos Partenariats</h3>
              <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Rejoignez l'UPCD et bénéficiez de nos collaborations nationales et internationales
                pour enrichir votre parcours académique et professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/partenariats"
                  className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
                >
                  <span>Découvrir tous nos partenariats</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/admission"
                  className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  <span>Candidater maintenant</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section - Completely Redesigned */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-16 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Communauté Dynamique
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Vie <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Étudiante</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Découvrez l'ambiance dynamique de notre campus à travers les moments forts
              de la vie étudiante, des activités académiques aux événements culturels.
            </p>
          </div>

          {/* Enhanced Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Image 1 - Enhanced */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/activity1.jpg"
                alt="Activité étudiante 1"
                width={300}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold mb-2">Activités Académiques</h3>
                <p className="text-sm opacity-90">Projets étudiants et travaux pratiques</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Image 2 - Enhanced */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/activity2.JPG"
                alt="Activité étudiante 2"
                width={300}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold mb-2">Événements Campus</h3>
                <p className="text-sm opacity-90">Conférences et séminaires</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Image 3 - Enhanced */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/soutenance_img.JPG"
                alt="Soutenance"
                width={300}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold mb-2">Soutenances</h3>
                <p className="text-sm opacity-90">Présentations de projets de fin d'études</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Image 4 - Enhanced */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/grouped_picture2.JPG"
                alt="Groupe d'étudiants"
                width={300}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold mb-2">Esprit d'Équipe</h3>
                <p className="text-sm opacity-90">Cohésion et collaboration étudiante</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Stats and CTA */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Clubs Étudiants</div>
              <p className="text-gray-600 text-sm">Associations sportives, culturelles et académiques</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Événements/An</div>
              <p className="text-gray-600 text-sm">Conférences, séminaires et activités culturelles</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Engagement</div>
              <p className="text-gray-600 text-sm">Tous nos étudiants participent à la vie du campus</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/vie-etudiante"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Découvrir la vie étudiante</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Completely Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce animation-delay-200"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce animation-delay-600"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
              Votre Avenir Commence Ici
            </div>

            {/* Main Title */}
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Prêt à Rejoindre
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                l'UPCD ?
              </span>
            </h2>

            {/* Description */}
            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-blue-200 leading-relaxed">
              Donnez un nouvel élan à votre carrière avec nos formations d'excellence.
              <br />
              <span className="text-orange-300 font-semibold">L'avenir commence aujourd'hui !</span>
            </p>

            {/* Stats Row */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">2025</div>
                <div className="text-white font-semibold">Rentrée Ouverte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
                <div className="text-white font-semibold">Taux d'Insertion</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
                <div className="text-white font-semibold">Filières</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-white font-semibold">Accompagnement</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/admission"
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 min-w-[280px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Commencer mon admission
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </Link>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm min-w-[200px]"
                >
                  <span className="flex items-center justify-center">
                    Nous contacter
                    <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/tarifs"
                  className="group border-2 border-blue-400/80 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm min-w-[200px]"
                >
                  <span className="flex items-center justify-center">
                    Voir les tarifs
                    <BookOpen className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarsIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">Excellence reconnue</span>
              </div>

              <div className="h-4 w-px bg-blue-400 hidden md:block"></div>

              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Université agréée par l'État</span>
              </div>

              <div className="h-4 w-px bg-blue-400 hidden md:block"></div>

              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Partenariats internationaux</span>
              </div>
            </div>

            {/* Final Message */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-xl text-blue-100 mb-4">
                <span className="text-orange-300 font-bold">Plus de 1000 étudiants</span> nous font déjà confiance
              </p>
              <p className="text-lg text-blue-200">
                Rejoignez une communauté d'excellence et construisez votre avenir avec l'UPCD
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}