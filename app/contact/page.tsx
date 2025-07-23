import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle, ArrowRight, Star, Award, Users, BookOpen, GraduationCap, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact & Support depuis 2016
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Contactez
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Nous
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Notre équipe est là pour répondre à toutes vos questions sur nos formations,
                admissions et opportunités de bourses.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +223 XX XX XX XX
                </div>
                <div className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@upcd.edu.ml
                </div>
              </div>
            </div>

            {/* Right Content - Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-white font-semibold">Réponse Rapide</div>
                <div className="text-gray-300 text-sm mt-2">Délai moyen de réponse</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-white font-semibold">Satisfaction</div>
                <div className="text-gray-300 text-sm mt-2">Taux de satisfaction</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-300 mb-2">5</div>
                <div className="text-white font-semibold">Services</div>
                <div className="text-gray-300 text-sm mt-2">Domaines d'expertise</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2">6j/7</div>
                <div className="text-white font-semibold">Disponibilité</div>
                <div className="text-gray-300 text-sm mt-2">Lun-Sam ouvert</div>
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

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Informations de Contact</h2>

              <div className="space-y-8">
                <div className="group flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Adresse</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Centre-ville de Kati<br />
                      Mali, Afrique de l'Ouest
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Téléphone</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      +223 XX XX XX XX<br />
                      +223 XX XX XX XX (Fax)
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      contact@upcd.edu.ml<br />
                      admission@upcd.edu.ml
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Horaires d'ouverture</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Lundi - Vendredi: 8h00 - 17h00<br />
                      Samedi: 8h00 - 12h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Nos Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Admission</h4>
                    </div>
                    <p className="text-gray-700 font-medium">Informations sur les inscriptions et les programmes</p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Orientation</h4>
                    </div>
                    <p className="text-gray-700 font-medium">Conseil et accompagnement dans le choix de formation</p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Bourses</h4>
                    </div>
                    <p className="text-gray-700 font-medium">Informations sur les aides financières disponibles</p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Stages</h4>
                    </div>
                    <p className="text-gray-700 font-medium">Opportunités de stages nationaux et internationaux</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Envoyez-nous un Message</h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium"
                      placeholder="+223 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Sujet *
                    </label>
                    <select
                      required
                      className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="admission">Demande d'admission</option>
                      <option value="formations">Informations sur les formations</option>
                      <option value="bourses">Bourses et aides financières</option>
                      <option value="stages">Opportunités de stages</option>
                      <option value="partenariats">Partenariats</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  <div className="flex items-start bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 mr-4 w-5 h-5 text-blue-600 border-2 border-blue-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-gray-800 font-medium leading-relaxed">
                      J'accepte que mes données personnelles soient utilisées pour traiter ma demande
                      conformément à la politique de confidentialité de l'UPCD. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center"
                  >
                    <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Questions Fréquentes
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Quelles sont les conditions d'admission à l'UPCD ?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed ml-16">
                  L'admission à l'UPCD se fait sur dossier. Pour le DUT, il faut être titulaire du baccalauréat.
                  Pour la Licence, il faut avoir un DUT ou équivalent. Pour le Master, une Licence est requise.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Comment bénéficier des bourses FAFPA ou DSSA ?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed ml-16">
                  Pour les bourses FAFPA, vous devez être un professionnel en activité. Pour les bourses DSSA,
                  vous devez être enfant de militaire. Contactez notre service d'admission pour plus de détails.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Les stages en Espagne sont-ils obligatoires ?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed ml-16">
                  Les stages en Espagne avec CEDIFA sont optionnels mais fortement recommandés.
                  Ils offrent une expérience internationale précieuse pour votre parcours professionnel.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Quand commencent les inscriptions pour la prochaine rentrée ?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed ml-16">
                  Les inscriptions commencent généralement en juin pour la rentrée d'octobre.
                  Nous vous recommandons de vous inscrire tôt pour garantir votre place.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    L'UPCD propose-t-elle des formations à distance ?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed ml-16">
                  Actuellement, nos formations sont principalement en présentiel sur notre campus de Kati.
                  Cependant, nous développons des modules de formation continue qui peuvent inclure du distanciel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Notre Localisation
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Notre Localisation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Situé au centre-ville de Kati, notre campus est facilement accessible
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-3xl flex items-center justify-center border-2 border-blue-300 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/20"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Carte interactive à venir</h3>
                <p className="text-lg text-gray-700 font-medium">Centre-ville de Kati, Mali</p>
                <div className="mt-6 inline-flex items-center bg-white/80 backdrop-blur-sm text-blue-800 rounded-full px-6 py-3 font-semibold border border-blue-200">
                  <Clock className="w-4 h-4 mr-2" />
                  Accessible 24h/24
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