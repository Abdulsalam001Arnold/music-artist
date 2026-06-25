"use client";

import { Music2 } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".bg-marquee",
      { x: "10%" },
      {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative w-full bg-bg-dark overflow-hidden py-16 border-t border-brand-green">
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] md:w-[300%] select-none pointer-events-none z-0">
        <h2 className="bg-marquee font-display text-[150px] md:text-[250px] lg:text-[350px] text-text-light/5 whitespace-nowrap uppercase tracking-tighter mix-blend-overlay">
          BURNA BOY BURNA BOY BURNA BOY
        </h2>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-[80px] flex flex-col md:flex-row justify-between items-center gap-8 min-h-[200px]">
        {/* Logo/Brand */}
        <div>
          <Link href="#home" className="font-display text-4xl text-text-light hover:text-brand-gold transition-colors block text-center md:text-left">
            BURNA BOY
          </Link>
          <p className="font-mono text-text-muted text-xs tracking-widest mt-2 uppercase text-center md:text-left">
            African Giant
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram" className="text-text-muted hover:text-brand-gold transition-colors hover:scale-110 transform">
            <BsInstagram size={28} />
          </a>
          <a href="#" aria-label="Twitter" className="text-text-muted hover:text-brand-gold transition-colors hover:scale-110 transform">
            <BsTwitterX size={28} />
          </a>
          <a href="https://www.youtube.com/@BurnaBoy" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-text-muted hover:text-brand-gold transition-colors hover:scale-110 transform">
            <BsYoutube size={28} />
          </a>
          <a href="https://open.spotify.com/artist/3YT4ytjCtGwl9LVRIx073G" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="text-text-muted hover:text-brand-gold transition-colors hover:scale-110 transform">
            <Music2 size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono text-text-muted text-xs tracking-widest uppercase text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} BURNA BOY.</p>
          <p className="mt-1">All RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
