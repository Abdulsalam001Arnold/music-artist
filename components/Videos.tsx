"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const videos = [
  { id: "1", url: "https://www.youtube.com/embed/PFPfxcvRshk?si=goIZ0ODryNHngvpy" }, // Last Last
  { id: "2", url: "https://www.youtube.com/embed/hLDQ88vAhIs?si=SqKMfBMuKiCOEZZm" }, // Ye
  { id: "3", url: "https://www.youtube.com/embed/fcnDmrtj6Sk?si=2egNLiI3rHYVWVn4" }, // On The Low
];

export default function Videos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".video-item",
      { y: 100, opacity: 0, scale: 0.8, rotateX: -15 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        duration: 1.2, 
        stagger: 0.2, 
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="videos" className="w-full bg-bg-surface py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        <h2 className="font-display text-text-light text-5xl md:text-7xl uppercase mb-16 md:mb-24 text-center">
          Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              className="video-item relative aspect-video bg-bg-dark border border-brand-green group"
            >
              <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl"></div>
              <iframe 
                className="relative z-10 w-full h-full grayscale-50 hover:grayscale-0 transition-all duration-700" 
                src={vid.url} 
                title="Burna Boy Music Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
