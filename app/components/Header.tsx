"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Function to get mobile link classes with colors
  const getMobileLinkClasses = (href: string) => {
    const baseClasses =
      "block px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105";

    const colorMap: { [key: string]: { active: string; inactive: string } } = {
      "/": {
        active:
          "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg border-l-4 border-blue-700",
        inactive:
          "text-gray-700 bg-blue-50/70 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500",
      },
      "/presentation": {
        active:
          "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg border-l-4 border-orange-700",
        inactive:
          "text-gray-700 bg-orange-50/70 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500",
      },
      "/formations": {
        active:
          "text-white bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg border-l-4 border-indigo-700",
        inactive:
          "text-gray-700 bg-indigo-50/70 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-500",
      },
      "/vie-etudiante": {
        active:
          "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg border-l-4 border-green-700",
        inactive:
          "text-gray-700 bg-green-50/70 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500",
      },
      "/partenariats": {
        active:
          "text-white bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg border-l-4 border-purple-700",
        inactive:
          "text-gray-700 bg-purple-50/70 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500",
      },
      "/tarifs": {
        active:
          "text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg border-l-4 border-amber-700",
        inactive:
          "text-gray-700 bg-amber-50/70 hover:text-white hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500",
      },
      "/contact": {
        active:
          "text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg border-l-4 border-cyan-700",
        inactive:
          "text-gray-700 bg-cyan-50/70 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500",
      },
    };

    const colors = colorMap[href] || {
      active:
        "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg border-l-4 border-blue-700",
      inactive:
        "text-gray-700 bg-blue-50/70 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500",
    };

    return `${baseClasses} ${
      isActiveLink(href) ? colors.active : colors.inactive
    }`;
  };

  return (
    <>
      {/* Top Bar - Fixed - Hidden on mobile */}
      <div
        className={`bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-2 hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${
          isScrolled ? "shadow-2xl bg-opacity-95" : "bg-opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs xl:text-sm">
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-1.5 xl:space-x-2">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 text-blue-300 flex-shrink-0" />
                <span className="font-medium truncate">+223 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-1.5 xl:space-x-2">
                <Mail className="w-3 h-3 xl:w-4 xl:h-4 text-blue-300 flex-shrink-0" />
                <span className="font-medium truncate">
                  univ.upcd@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 xl:space-x-2">
              <Clock className="w-3 h-3 xl:w-4 xl:h-4 text-blue-300 flex-shrink-0" />
              <span className="font-medium hidden xl:inline">
                Lun-Ven: 8h-17h | Sam: 8h-12h
              </span>
              <span className="font-medium xl:hidden">8h-17h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-gradient-to-r from-white via-blue-50 to-white shadow-lg sticky z-40 border-b-2 sm:border-b-4 border-blue-500 transition-all duration-500 backdrop-blur-lg ${
          isScrolled ? "top-0 bg-opacity-95" : "top-5 "
        }`}
        style={{ marginTop: "0px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group"
            >
              <div className="relative transform group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/logo-upcd.png"
                  alt="UPCD Logo"
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative rounded-full ring-2 sm:ring-3 md:ring-4 ring-blue-200 group-hover:ring-blue-300 transition-all shadow-md"
                />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  UPCD
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold hidden sm:block">
                  Université Privée Cheickné DIALLO
                </p>
                <p className="text-[9px] sm:text-xs text-blue-600 font-bold italic hidden md:block">
                  L&apos;avenir c&apos;est aujourd&apos;hui
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              <Link
                href="/presentation"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/presentation")
                    ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md"
                    : "text-gray-700 bg-blue-50/50 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500"
                }`}
              >
                À Propos
              </Link>
              <Link
                href="/formations"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/formations")
                    ? "text-white bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-md"
                    : "text-gray-700 bg-indigo-50/50 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-500"
                }`}
              >
                Formations
              </Link>
              <Link
                href="/vie-etudiante"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/vie-etudiante")
                    ? "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-md"
                    : "text-gray-700 bg-green-50/50 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500"
                }`}
              >
                Campus
              </Link>
              <Link
                href="/partenariats"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/partenariats")
                    ? "text-white bg-gradient-to-r from-purple-500 to-purple-600 shadow-md"
                    : "text-gray-700 bg-purple-50/50 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500"
                }`}
              >
                Partenariats
              </Link>
              <Link
                href="/tarifs"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/tarifs")
                    ? "text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md"
                    : "text-gray-700 bg-amber-50/50 hover:text-white hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500"
                }`}
              >
                Tarifs
              </Link>
              <Link
                href="/contact"
                className={`px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base transition-all duration-300 whitespace-nowrap ${
                  isActiveLink("/contact")
                    ? "text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-md"
                    : "text-gray-700 bg-cyan-50/50 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/admission"
                className="ml-1 xl:ml-3 2xl:ml-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 xl:px-5 2xl:px-6 py-1.5 xl:py-2 2xl:py-2.5 rounded-lg font-bold text-xs xl:text-sm 2xl:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Candidater
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 sm:p-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t-2 border-blue-200 bg-white">
              <nav className="py-2 sm:py-3 space-y-1 sm:space-y-2 px-2 sm:px-3">
                <Link
                  href="/"
                  className={getMobileLinkClasses("/")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/presentation"
                  className={getMobileLinkClasses("/presentation")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
                <Link
                  href="/formations"
                  className={getMobileLinkClasses("/formations")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Formations
                </Link>
                <Link
                  href="/vie-etudiante"
                  className={getMobileLinkClasses("/vie-etudiante")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Campus
                </Link>
                <Link
                  href="/partenariats"
                  className={getMobileLinkClasses("/partenariats")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partenariats
                </Link>
                <Link
                  href="/tarifs"
                  className={getMobileLinkClasses("/tarifs")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tarifs
                </Link>
                <Link
                  href="/contact"
                  className={getMobileLinkClasses("/contact")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/admission"
                  className="block mx-2 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold text-center text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Candidater
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
