import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Linkedin,
    Twitter,
    Instagram,
    ArrowRight,
    GraduationCap,
    Users,
    Globe,
    Award,
    ChevronRight
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Top Section */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
                    {/* Logo et description - Enhanced */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                                    <Image
                                        src="/logo-upcd.png"
                                        alt="UPCD Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <Award className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    UPCD
                                </h3>
                                <p className="text-blue-200 font-medium">Université Privée Cheickné DIALLO</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 mb-6">
                            <p className="text-blue-300 font-bold text-lg mb-2 italic">
                                "Avec l'UPCD, l'avenir c'est aujourd'hui"
                            </p>
                            <p className="text-blue-100 leading-relaxed">
                                Une université moderne au cœur de Kati, formant les leaders de demain
                                dans un environnement international. L'UPCD prépare ses étudiants à
                                relever les défis de l'Afrique et du Mali.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="flex items-center mb-2">
                                    <Users className="w-5 h-5 text-blue-400 mr-2" />
                                    <span className="text-2xl font-bold text-white">1000+</span>
                                </div>
                                <p className="text-blue-200 text-sm">Étudiants</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="flex items-center mb-2">
                                    <GraduationCap className="w-5 h-5 text-indigo-400 mr-2" />
                                    <span className="text-2xl font-bold text-white">20+</span>
                                </div>
                                <p className="text-blue-200 text-sm">Filières</p>
                            </div>
                        </div>
                    </div>

                    {/* Liens rapides - Enhanced */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                                <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">Navigation</h4>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/presentation" className="group flex items-center text-blue-200 hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Présentation</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/formations" className="group flex items-center text-blue-200 hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Formations</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/vie-etudiante" className="group flex items-center text-blue-200 hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Vie Étudiante</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/partenariats" className="group flex items-center text-blue-200 hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Partenariats</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tarifs" className="group flex items-center text-blue-200 hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Tarifs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admission" className="group flex items-center text-cyan-300 hover:text-cyan-100 transition-all duration-300 font-semibold">
                                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                    <span>Admission</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - Enhanced */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mr-3">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">Contact</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Adresse</p>
                                        <p className="text-blue-200 text-sm">Centre-ville de Kati, Mali</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Téléphone</p>
                                        <p className="text-blue-200 text-sm">+223 XX XX XX XX</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Email</p>
                                        <p className="text-blue-200 text-sm">contact@upcd.edu.ml</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Call to Action */}
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 mb-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Rejoignez l'Excellence Académique
                        </h3>
                        <p className="text-blue-200 text-lg mb-6 max-w-2xl mx-auto">
                            Découvrez nos formations d'excellence et commencez votre parcours vers la réussite professionnelle
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/admission"
                                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                            >
                                <GraduationCap className="w-5 h-5 mr-2" />
                                <span>Candidater Maintenant</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                <span>Nous Contacter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-center lg:text-left">
                            <p className="text-blue-200 mb-2">
                                © 2025 Université Privée Cheickné DIALLO. Tous droits réservés.
                            </p>

                        </div>

                        {/* Social Media - Enhanced */}
                        <div className="flex items-center space-x-4">
                            <span className="text-blue-200 text-sm font-medium mr-2">Suivez-nous :</span>
                            <a
                                href="#"
                                className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                            >
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="group w-10 h-10 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="group w-10 h-10 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                            >
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="group w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}