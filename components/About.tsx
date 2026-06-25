"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".about-image-wrapper",
      { x: -100, scale: 0.85, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" }
    )
      .fromTo(
        ".about-text-content > *",
        { x: 50, y: 30, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="w-full bg-bg-surface py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left: Image (Spans col 1-5 on desktop) */}
        <div className="about-image-wrapper lg:col-span-5 relative h-[500px] md:h-[700px] w-full">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWR58yIPB3eUKJiyDzwxYcDKFGfzo4SQYmdHVT33sICWX2ZmKh3BzN6jRm&s=10"
            alt="Portrait of Burna Boy"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* subtle gold border overlay */}
          <div className="absolute inset-0 border border-brand-gold/20 z-10 pointer-events-none"></div>
        </div>

        {/* Right: Text (Spans col 6-12 on desktop) */}
        <div className="about-text-content lg:col-span-7 flex flex-col gap-8">
          <h2 className="font-display text-text-light text-5xl md:text-6xl uppercase leading-tight">
            The African Giant
          </h2>
          
          <p className="font-body text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Born Damini Ebunoluwa Ogulu, Burna Boy has redefining global music. 
            Fusing dancehall, reggae, Afrobeat, and pop, he created Afrofusion—a 
            genre that defies boundaries and commands global arenas.
          </p>

          <blockquote className="border-l-2 border-brand-gold pl-6 py-2 my-4">
            <p className="font-display text-brand-gold text-2xl md:text-3xl lg:text-4xl leading-tight">
              &ldquo;I am a child of the continent. My essence, my sound, is deeply rooted in the soil that birthed me.&rdquo;
            </p>
          </blockquote>

          <p className="font-body text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            With a Grammy Award to his name and sold-out stadium shows across the world, 
            he is not just a musician; he is a cultural movement, an undeniable force of nature 
            elevating African artistry to unprecedented heights.
          </p>
        </div>

      </div>
    </section>
  );
}
