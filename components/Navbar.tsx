"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(".mobile-menu", { y: 0, duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        ".mobile-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(".mobile-menu", { y: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "MUSIC", href: "#music" },
    { name: "TOUR", href: "#tour" },
    { name: "VIDEOS", href: "#videos" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-bg-dark py-4 shadow-md" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight text-brand-gold relative z-50"
          >
            BURNA BOY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[12px] font-medium tracking-widest text-text-light hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 text-text-light hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed inset-0 bg-bg-dark z-40 flex flex-col justify-center items-center -translate-y-full">
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-link font-display text-4xl text-text-light hover:text-brand-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
