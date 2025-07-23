import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  FileText, Send, Search, CheckCircle, Users, GraduationCap, 
  Calendar, Clock, Award, Star, ArrowRight, Download, Phone,
  BookOpen, Target, Zap, Shield
} from "lucide-react";

export default function Admission() {
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
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-300 rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                Admission Ouverte 2025
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Rejoignez
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  l'UPCD
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-300">
                  Construisez votre Avenir
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Un processus d'admission simple et transparent pour intégrer une formation d'excellence 
                et donner un nouvel élan à votre carrière.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le Dossier
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Prendre Rendez-vous
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - Admission Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">48h</div>
                <div className="text-white font-semibold">Réponse Rapide</div>
                <div className="text-gray-300 text-sm mt-2">Traitement des dossiers</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
                <div className="text-white font-semibold">Taux d'Insertion</div>
                <div className="text-gray-300 text-sm mt-2">Emploi après diplôme</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
                <div className="text-white font-semibold">Niveaux</div>
                <div className="text-gray-300 text-sm mt-2">DUT, Licence, Master</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-white font-semibold">Bourses</div>
                <div className="text-gray-300 text-sm mt-2">Étudiants aidés</div>
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

      {/* Process d'Admission */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              Processus Simplifié
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Processus d'<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Admission</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Un processus simple et transparent pour intégrer l'UPCD en seulement 4 étapes
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-50 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Constitution du Dossier</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rassemblez tous les documents requis selon votre niveau d'études
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-50 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Send className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Dépôt du Dossier</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Soumettez votre dossier en ligne ou directement au secrétariat
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-50 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Étude du Dossier</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Évaluation par notre commission d'admission experte
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-50 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Réponse Rapide</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Notification sous 48h et inscription immédiate si accepté
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions d'Admission */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <GraduationCap className="w-4 h-4 mr-2" />
              Niveaux de Formation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Conditions d'<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Admission</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Trois niveaux de formation adaptés à votre parcours académique et professionnel
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* DUT */}
            <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50"></div>
              <div className="relative p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">DUT</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Bac+2</h3>
                  <p className="text-blue-600 font-medium">Diplôme Universitaire de Technologie</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      Prérequis
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Baccalauréat toutes séries</li>
                      <li>• Âge maximum : 25 ans</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      Durée
                    </h4>
                    <p className="text-gray-700 text-sm">4 semestres (2 ans)</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      Débouchés
                    </h4>
                    <p className="text-gray-700 text-sm">Insertion professionnelle ou poursuite en Licence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Licence */}
            <div className="group relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-500 border-3 border-blue-400 hover:border-blue-500 overflow-hidden transform scale-105 hover:scale-110">
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
                <Star className="w-4 h-4 mr-2" />
                POPULAIRE
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-100 opacity-60"></div>
              <div className="relative p-8 pt-12">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">LIC</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Bac+3</h3>
                  <p className="text-blue-600 font-medium">Licence Professionnelle</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      Prérequis
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• DUT ou équivalent (Bac+2)</li>
                      <li>• Dossier académique satisfaisant</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      Durée
                    </h4>
                    <p className="text-gray-700 text-sm">6 semestres (3 ans) ou 2 semestres après DUT</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      Débouchés
                    </h4>
                    <p className="text-gray-700 text-sm">Insertion professionnelle ou poursuite en Master</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Master */}
            <div className="group relative bg-gradient-to-br from-white via-slate-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100 opacity-40"></div>
              <div className="relative p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">MST</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Bac+5</h3>
                  <p className="text-slate-600 font-medium">Master Professionnel</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-slate-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      Prérequis
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Licence ou équivalent (Bac+3)</li>
                      <li>• Mention assez bien minimum</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-slate-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      Durée
                    </h4>
                    <p className="text-gray-700 text-sm">4 semestres (2 ans)</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-slate-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      Débouchés
                    </h4>
                    <p className="text-gray-700 text-sm">Postes de cadres supérieurs, recherche</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pièces à Fournir */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <FileText className="w-4 h-4 mr-2" />
              Documents Requis
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Pièces à <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Fournir</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Documents nécessaires pour constituer votre dossier d'admission
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Documents Obligatoires</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Formulaire de demande d'admission dûment rempli</span>
                    </div>
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Photocopie légalisée du diplôme requis</span>
                    </div>
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Relevé de notes des 3 dernières années</span>
                    </div>
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Photocopie de la carte d'identité</span>
                    </div>
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">4 photos d'identité récentes</span>
                    </div>
                    <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Certificat médical de moins de 3 mois</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white via-slate-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-300 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100 opacity-40"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Documents Complémentaires</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">Lettre de motivation personnalisée</span>
                    </div>
                    <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">CV détaillé (pour Master)</span>
                    </div>
                    <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">Attestation de stage ou d'emploi</span>
                    </div>
                    <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">Certificat de scolarité (si étudiant)</span>
                    </div>
                    <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">Justificatifs pour bourses (FAFPA, DSSA)</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 shadow-inner">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 font-medium leading-relaxed">
                        <strong>Note importante :</strong> Tous les documents doivent être en français ou traduits 
                        et légalisés si nécessaire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frais de Scolarité */}
      <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-300 rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Tarifs Transparents
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Frais de <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Scolarité</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Des tarifs accessibles avec de nombreuses possibilités de financement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/20 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-white">DUT</h3>
                <div className="text-5xl font-bold text-blue-400 mb-4">500,000</div>
                <p className="text-blue-200 mb-6 text-lg font-medium">FCFA / an</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Cours et TD</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Accès bibliothèque</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Laboratoires</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center border-3 border-blue-400 hover:border-blue-300 transition-all duration-500 transform scale-105 hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/30 rounded-3xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
                <Star className="w-4 h-4 mr-2" />
                POPULAIRE
              </div>
              <div className="relative pt-4">
                <h3 className="text-3xl font-bold mb-6 text-white">Licence</h3>
                <div className="text-5xl font-bold text-blue-300 mb-4">600,000</div>
                <p className="text-blue-200 mb-6 text-lg font-medium">FCFA / an</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Cours et TD</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Projets pratiques</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Stages encadrés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-blue-600/20 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-white">Master</h3>
                <div className="text-5xl font-bold text-blue-500 mb-4">750,000</div>
                <p className="text-blue-200 mb-6 text-lg font-medium">FCFA / an</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Cours spécialisés</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Recherche</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Encadrement personnalisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-blue-200 mb-8 font-medium">
              Possibilités de paiement échelonné et bourses disponibles
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Bourses FAFPA
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Bourses DSSA
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Paiement échelonné
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Calendar className="w-4 h-4 mr-2" />
              Dates Importantes
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Calendrier <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Académique</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Planifiez votre admission avec nos dates clés pour la rentrée 2025
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Rentrée 2025</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-4 bg-white/60 backdrop-blur-sm rounded-lg px-4 border border-blue-200 shadow-sm">
                      <span className="font-medium text-gray-800">Ouverture des inscriptions</span>
                      <span className="text-blue-600 font-bold">Juin 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-white/60 backdrop-blur-sm rounded-lg px-4 border border-blue-200 shadow-sm">
                      <span className="font-medium text-gray-800">Clôture des inscriptions</span>
                      <span className="text-blue-600 font-bold">Septembre 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-white/60 backdrop-blur-sm rounded-lg px-4 border border-blue-200 shadow-sm">
                      <span className="font-medium text-gray-800">Rentrée académique</span>
                      <span className="text-blue-600 font-bold">Octobre 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-white/60 backdrop-blur-sm rounded-lg px-4 border border-blue-200 shadow-sm">
                      <span className="font-medium text-gray-800">Début des cours</span>
                      <span className="text-blue-600 font-bold">15 Octobre 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white via-slate-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-300 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100 opacity-40"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Informations Importantes</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 shadow-inner">
                      <div className="flex items-start">
                        <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">Inscription Anticipée</h4>
                          <p className="text-blue-700 font-medium">
                            Réduction de 10% pour les inscriptions avant le 31 juillet
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl border-2 border-blue-200 shadow-inner">
                      <div className="flex items-start">
                        <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">Places Limitées</h4>
                          <p className="text-blue-700 font-medium">
                            Nombre de places limité par filière, inscription recommandée tôt
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-100 rounded-2xl border-2 border-slate-200 shadow-inner">
                      <div className="flex items-start">
                        <Target className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Accompagnement</h4>
                          <p className="text-slate-700 font-medium">
                            Service d'orientation gratuit pour vous aider dans votre choix
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-300 rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-white/20">
            <GraduationCap className="w-4 h-4 mr-2" />
            Votre Avenir Commence Ici
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Prêt à
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Commencer ?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Rejoignez l'UPCD et donnez un nouvel élan à votre carrière. 
            L'excellence académique et l'insertion professionnelle vous attendent !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center">
              <Download className="w-6 h-6 mr-3" />
              Télécharger le Dossier
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              Prendre Rendez-vous
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">48h</div>
              <div className="text-white text-sm">Réponse rapide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">95%</div>
              <div className="text-white text-sm">Insertion pro</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">60%</div>
              <div className="text-white text-sm">Bourses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">100+</div>
              <div className="text-white text-sm">Stages Europe</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}