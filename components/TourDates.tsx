"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const dates = [
  { id: 1, date: "OCT 12", venue: "The O2 Arena", city: "London, UK" },
  { id: 2, date: "OCT 20", venue: "Accor Arena", city: "Paris, FR" },
  { id: 3, date: "NOV 05", venue: "Madison Square Garden", city: "New York, NY" },
  { id: 4, date: "NOV 18", venue: "State Farm Arena", city: "Atlanta, GA" },
  { id: 5, date: "DEC 10", venue: "Eko Convention Centre", city: "Lagos, NG" },
  { id: 6, date: "DEC 28", venue: "FNB Stadium", city: "Johannesburg, ZA" },
];

export default function TourDates() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".tour-row",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="tour" className="w-full bg-bg-dark py-24 md:py-40">
      <div className="max-w-[1000px] mx-auto px-5 lg:px-[80px]">
        <h2 className="font-display text-text-light text-5xl md:text-7xl uppercase mb-16 md:mb-24 text-left border-b border-brand-green pb-8">
          World Tour
        </h2>

        <div className="flex flex-col">
          {dates.map((item) => (
            <div 
              key={item.id} 
              className="tour-row flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-brand-green/50 group hover:bg-bg-surface-light/30 transition-colors px-4 -mx-4"
            >
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <span className="font-mono text-brand-gold text-lg md:text-xl tracking-widest">
                  {item.date}
                </span>
              </div>
              <div className="w-full md:w-1/2 mb-2 md:mb-0">
                <span className="font-display text-text-light text-3xl md:text-4xl group-hover:text-brand-gold transition-colors">
                  {item.venue}
                </span>
              </div>
              <div className="w-full md:w-1/4 md:text-right">
                <span className="font-body text-text-muted text-lg uppercase tracking-wider">
                  {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
