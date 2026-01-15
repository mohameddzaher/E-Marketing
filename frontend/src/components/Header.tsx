"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Career", href: "/career" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-gradient-to-r from-[#DC2626]/10 via-black to-[#DC2626]/10 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - Using SVG/Image */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/white-logo.png"}
              alt="Energize Logo"
              className="h-8 sm:h-10 w-auto transition-opacity duration-300"
            />
            {/* <span className={`font-bold text-base hidden sm:block ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Energize
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium text-xs ${
                    active
                      ? isScrolled
                        ? "text-primary font-bold bg-primary/10"
                        : "text-primary font-bold bg-white/10"
                      : isScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-primary/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/contact" className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs transition-all duration-300 shadow-md hover:shadow-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-3 space-y-1"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-all text-sm ${
                    active
                      ? isScrolled
                        ? "text-primary font-bold bg-primary/10"
                        : "text-primary font-bold bg-white/10"
                      : isScrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="block w-full px-3 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
