import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle, X, Star, TrendingUp, Shield, Zap, Calendar, Award, GraduationCap, CreditCard } from "lucide-react";

export default function Tarifs() {
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
                <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 text-sm font-semibold mb-6">
                            Tarifs Transparents
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Investissez dans votre <span className="text-blue-400">Avenir</span>
                        </h1>
                        <p className="text-xl text-blue-200 leading-relaxed mb-8">
                            Des tarifs accessibles avec des possibilités de financement et de bourses pour rendre
                            l'excellence académique accessible à tous les étudiants motivés.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                                <CreditCard className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-blue-400 font-semibold">Paiement échelonné disponible</span>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                                <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-blue-400 font-semibold">Bourses FAFPA & DSSA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choisissez votre Parcours</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trois niveaux de formation avec des tarifs adaptés à chaque étape de votre parcours académique
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* DUT Card */}
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
                            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50"></div>
                            <div className="relative p-8">
                                <div className="text-center mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-2xl font-bold">DUT</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Diplôme Universitaire de Technologie</h3>
                                    <p className="text-blue-600 font-medium">Bac+2 • 4 semestres</p>
                                </div>

                                <div className="text-center mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-inner">
                                    <div className="text-5xl font-bold text-blue-900 mb-2">
                                        500,000
                                        <span className="text-lg font-normal text-blue-600">FCFA</span>
                                    </div>
                                    <p className="text-blue-700 font-medium">par année académique</p>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Cours magistraux et TD</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Accès bibliothèque numérique</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Laboratoires informatiques</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Encadrement pédagogique</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Stages en entreprise</span>
                                    </div>
                                    <div className="flex items-center bg-gray-100/70 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                        <span className="text-gray-500">Projets de recherche</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Choisir DUT
                                </button>
                            </div>
                        </div>

                        {/* Licence Card - Popular */}
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-500 border-3 border-blue-400 hover:border-blue-500 overflow-hidden transform scale-105 hover:scale-110">
                            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700"></div>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
                                <Star className="w-4 h-4 mr-2" />
                                POPULAIRE
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-100 opacity-60"></div>
                            <div className="relative p-8 pt-12">
                                <div className="text-center mb-8">
                                    <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-3xl font-bold">LIC</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Licence Professionnelle</h3>
                                    <p className="text-blue-600 font-medium">Bac+3 • 6 semestres</p>
                                </div>

                                <div className="text-center mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                                    <div className="text-6xl font-bold text-blue-900 mb-2">
                                        600,000
                                        <span className="text-lg font-normal text-blue-600">FCFA</span>
                                    </div>
                                    <p className="text-blue-700 font-medium">par année académique</p>
                                    <div className="mt-4">
                                        <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                                            Économisez 10% avec paiement annuel
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Tout du DUT inclus</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Projets pratiques avancés</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Stages encadrés obligatoires</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Accompagnement insertion pro</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Accès réseau alumni</span>
                                    </div>
                                    <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Initiation à la recherche</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-5 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                                    Choisir Licence
                                </button>
                            </div>
                        </div>

                        {/* Master Card */}
                        <div className="group relative bg-gradient-to-br from-white via-slate-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
                            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100 opacity-40"></div>
                            <div className="relative p-8">
                                <div className="text-center mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-2xl font-bold">MST</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Master Professionnel</h3>
                                    <p className="text-slate-600 font-medium">Bac+5 • 4 semestres</p>
                                </div>

                                <div className="text-center mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-inner">
                                    <div className="text-5xl font-bold text-slate-900 mb-2">
                                        750,000
                                        <span className="text-lg font-normal text-slate-600">FCFA</span>
                                    </div>
                                    <p className="text-slate-700 font-medium">par année académique</p>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Tout de la Licence inclus</span>
                                    </div>
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Cours spécialisés avancés</span>
                                    </div>
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Projets de recherche</span>
                                    </div>
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Encadrement personnalisé</span>
                                    </div>
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Stages internationaux</span>
                                    </div>
                                    <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">Accès postes cadres</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-slate-600 to-blue-700 hover:from-slate-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Choisir Master
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bourses et Aides */}
            <section className="py-24 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Bourses et Aides Financières</h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                            L'UPCD s'engage à rendre l'éducation accessible grâce à ses partenariats et programmes d'aide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* FAFPA */}
                        <div className="group relative bg-gradient-to-br from-white/20 via-blue-50/30 to-blue-100/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/20 rounded-3xl"></div>
                            <div className="relative">
                                <div className="flex items-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">FAFPA</h3>
                                        <p className="text-blue-100 font-medium">Fonds d'Appui à la Formation Professionnelle</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Prise en charge jusqu'à 100% des frais</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Pour professionnels en activité</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Formation continue et perfectionnement</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Dossier simplifié</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DSSA */}
                        <div className="group relative bg-gradient-to-br from-white/20 via-indigo-50/30 to-blue-100/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-600/20 rounded-3xl"></div>
                            <div className="relative">
                                <div className="flex items-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Star className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">DSSA</h3>
                                        <p className="text-blue-100 font-medium">Direction du Service Social des Armées</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Demi-bourses disponibles</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Bourses entières selon critères</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Pour enfants de militaires</span>
                                    </div>
                                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                                        <span className="text-white font-medium">Accompagnement social</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalités de Paiement */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Modalités de Paiement</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Plusieurs options flexibles pour faciliter votre parcours académique
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-50"></div>
                            <div className="relative p-8 text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paiement Annuel</h3>
                                <p className="text-gray-700 mb-6 font-medium">Payez l'année complète en une fois</p>
                                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4 shadow-inner">
                                    <p className="text-blue-800 font-bold text-lg">Réduction de 10%</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-white via-indigo-50 to-blue-100 rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-500 border-3 border-blue-400 hover:border-blue-500 overflow-hidden transform scale-105 hover:scale-110">
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-100 opacity-60"></div>
                            <div className="relative p-8 text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paiement Semestriel</h3>
                                <p className="text-gray-700 mb-6 font-medium">Payez par semestre</p>
                                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-xl p-4 shadow-inner">
                                    <p className="text-blue-800 font-bold text-lg">Option populaire</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-white via-slate-50 to-blue-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-300 overflow-hidden transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100 opacity-40"></div>
                            <div className="relative p-8 text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <Calendar className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paiement Échelonné</h3>
                                <p className="text-gray-700 mb-6 font-medium">Étalez vos paiements sur plusieurs mois</p>
                                <div className="bg-gradient-to-r from-slate-50 to-blue-100 border-2 border-slate-200 rounded-xl p-4 shadow-inner">
                                    <p className="text-slate-800 font-bold text-lg">Jusqu'à 6 mensualités</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-5xl font-bold mb-6">Prêt à Commencer ?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Rejoignez l'UPCD et bénéficiez d'une formation d'excellence avec des modalités de paiement adaptées à votre situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                            <span className="flex items-center justify-center">
                                Demander une bourse
                                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span className="flex items-center justify-center">
                                Simuler mon financement
                                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}