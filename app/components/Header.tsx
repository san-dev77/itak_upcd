'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Function to get link classes
  const getLinkClasses = (href: string) => {
    const baseClasses = "px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";
    const activeClasses = "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg border-b-2 border-blue-700";
    const inactiveClasses = "text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md";

    return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`;
  };

  // Function to get mobile link classes
  const getMobileLinkClasses = (href: string) => {
    const baseClasses = "block px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";
    const activeClasses = "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg border-l-4 border-blue-700";
    const inactiveClasses = "text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100";

    return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      {/* Top Bar - Fixed */}
      <div className={`bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${isScrolled ? 'shadow-2xl bg-opacity-95' : 'bg-opacity-100'
        }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="group flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-300">
                <Phone className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium">+223 XX XX XX XX</span>
              </div>
              <div className="group flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-300">
                <Mail className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium">contact@upcd.edu.ml</span>
              </div>
              <div className="group flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-300">
                <MapPin className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium">Centre-ville de Kati, Mali</span>
              </div>
            </div>
            <div className="group flex items-center space-x-2 hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-300">
              <Clock className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
              <span className="font-medium">Lun-Ven: 8h-17h | Sam: 8h-12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-gradient-to-r from-white via-blue-50 to-white shadow-2xl sticky z-40 border-b-4 border-blue-500 transition-all duration-500 backdrop-blur-lg ${isScrolled ? 'top-0 bg-opacity-95' : 'top-12'
        }`} style={{ marginTop: '48px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative transform group-hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Image
                  src="/logo-upcd.png"
                  alt="UPCD Logo"
                  width={70}
                  height={70}
                  className="relative rounded-full ring-4 ring-blue-200 group-hover:ring-blue-300 transition-all shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">U</span>
                </div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  UPCD
                </h1>
                <p className="text-sm text-gray-700 font-semibold">Université Privée Cheickné DIALLO</p>
                <p className="text-xs text-blue-600 font-bold italic">"L'avenir c'est aujourd'hui"</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">

              <Link href="/presentation" className={getLinkClasses('/presentation')}>
                À Propos
              </Link>
              <div className="relative group">
                <Link href="/formations" className={`${getLinkClasses('/formations')} flex items-center`}>
                  Formations
                  <svg className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-2xl border-2 border-blue-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-sm">
                  <div className="p-6">
                    <div className="space-y-2">
                      <Link href="/formations" className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        FDECO - Droit & Économie
                      </Link>
                      <Link href="/formations" className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        FAST - Sciences & Tech
                      </Link>
                      <Link href="/formations" className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        CRFC - Formation Continue
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/vie-etudiante" className={getLinkClasses('/vie-etudiante')}>
                Vie Étudiante
              </Link>
              <Link href="/partenariats" className={getLinkClasses('/partenariats')}>
                Partenariats
              </Link>
              <Link href="/tarifs" className={getLinkClasses('/tarifs')}>
                Tarifs
              </Link>
              <Link href="/contact" className={getLinkClasses('/contact')}>
                Contact
              </Link>
              <Link
                href="/admission"
                className="ml-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Admission 2025
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-4 text-gray-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 backdrop-blur-lg">
              <nav className="py-6 space-y-3 px-4">
                <Link href="/" className={getMobileLinkClasses('/')} onClick={() => setIsMenuOpen(false)}>
                  Accueil
                </Link>
                <Link href="/presentation" className={getMobileLinkClasses('/presentation')} onClick={() => setIsMenuOpen(false)}>
                  À Propos
                </Link>
                <Link href="/formations" className={getMobileLinkClasses('/formations')} onClick={() => setIsMenuOpen(false)}>
                  Formations
                </Link>
                <Link href="/vie-etudiante" className={getMobileLinkClasses('/vie-etudiante')} onClick={() => setIsMenuOpen(false)}>
                  Vie Étudiante
                </Link>
                <Link href="/partenariats" className={getMobileLinkClasses('/partenariats')} onClick={() => setIsMenuOpen(false)}>
                  Partenariats
                </Link>
                <Link href="/tarifs" className={getMobileLinkClasses('/tarifs')} onClick={() => setIsMenuOpen(false)}>
                  Tarifs
                </Link>
                <Link href="/contact" className={getMobileLinkClasses('/contact')} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/admission" className="block mx-2 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Admission 2025
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}