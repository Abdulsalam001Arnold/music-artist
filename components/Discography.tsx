"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const albums = [
  { id: 1, title: "I Told Them...", year: "2023", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP0VxEnZDpOiF6GPOxReh8eaO-MLHCt4Zu1lCTXkL9kBtq_7cP5I99I0&s=10" },
  { id: 2, title: "Twice as Tall", year: "2020", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ARe5nXFDdu9qa79Wah69jmyvMOS5xjHjrCob9Ds7NlvBuM6ilo6rFjbk&s=10" },
  { id: 3, title: "No sign of weakness", year: "2022", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSmvihNT8Jl4-j70nS9lY5zzqkCw0P3UIGcTDzYwciiRSkppr9FdAjlQe&s=10" },
  { id: 4, title: "Twice as Tall", year: "2020", src: "https://media.pitchfork.com/photos/5f3a9cab1a3bcf0f8e690164/1:1/w_1425,h_1425,c_limit/twice%20as%20tall_burna%20boy.jpg" },
  { id: 5, title: "I Told Them", year: "2023", src: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/1900x1900-000000-80-0-0.jpg" },
  { id: 6, title: "Outside", year: "2018", src: "https://upload.wikimedia.org/wikipedia/en/9/96/Burna_Boy_-_Outside_album_cover.jpg" },
];

function AlbumCard({ album }: { album: typeof albums[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -35;
    const rotateY = ((x - centerX) / centerX) * 35;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.05,
      z: 50,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 800,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div className="album-card opacity-0 translate-y-10" style={{ perspective: "1000px" }}>
      <div 
        ref={cardRef}
        className="relative group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-square w-full filter grayscale-50 hover:grayscale-0 transition-all duration-500">
          <Image
            src={album.src}
            alt={album.title}
            fill
            className="object-cover border border-brand-green/30"
          />
          {/* Edge Glow effect on hover */}
          <div className="absolute inset-0 bg-transparent shadow-[inset_0_0_0_1px_rgba(201,146,42,0)] group-hover:shadow-[inset_0_0_0_1px_rgba(201,146,42,0.8)] transition-all duration-500 pointer-events-none"></div>
        </div>
        
        <div className="mt-4 flex justify-between items-end">
          <h3 className="font-display text-text-light text-2xl lg:text-3xl group-hover:text-brand-gold transition-colors">
            {album.title}
          </h3>
          <span className="font-mono text-brand-gold text-sm transition-colors">
            {album.year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Discography() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".album-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="music" className="w-full bg-bg-dark py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        <h2 className="font-display text-brand-gold text-5xl md:text-7xl lg:text-[100px] uppercase mb-16 md:mb-24 text-center tracking-tighter">
          Discography
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
