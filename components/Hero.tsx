"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-image",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcq3qYIalUwgcjwbJJxoFrin9KB3UFVmUhiWjr8CQgKXxcdttytnHXVjE&s=10"
          alt="Burna Boy Performing"
          fill
          className="hero-image object-cover object-[center_20%]"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/40 to-bg-dark/10"></div>
        <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 mt-20 md:mt-0 flex flex-col items-center gap-6 max-w-5xl mx-auto w-full">
        <h1 className="hero-title font-display text-6xl md:text-8xl lg:text-[120px] leading-tight tracking-tighter text-text-light drop-shadow-2xl uppercase">
          BURNA BOY
        </h1>
        
        <p className="hero-subtitle font-mono text-sm md:text-base tracking-[0.2em] text-brand-gold uppercase">
          African Giant &middot; Grammy Award Winner
        </p>

        <div className="hero-cta mt-8">
          <a
            href="#music"
            className="inline-block bg-brand-gold hover:bg-brand-gold-light text-bg-dark font-mono text-xs md:text-sm font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            Explore Music
          </a>
        </div>
      </div>
    </section>
  );
}
