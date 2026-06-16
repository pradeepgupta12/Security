"use client";
import { useState } from "react";
import Link from "next/link";
import siteData from "@/lib/data";

export default function HeroSection() {
  const [videoErr, setVideoErr] = useState(false);
  const { hero } = siteData;

  return (
    <section className="relative w-full h-[56vh] md:h-[72vh] overflow-hidden bg-gray-900">
      {/* Video */}
      {!videoErr && (
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoErr(true)}>
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
      )}
      {/* Fallback image */}
      <img
        src={hero.fallbackImage}
        alt="JSS Group Security & Facility Management"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoErr ? "opacity-100" : "opacity-50"}`}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-red-400 text-xs font-bold uppercase tracking-[0.3em] mb-3 anim show">
          Since 2017 · Pan India · PSARA Licensed
        </p>
        
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-7 anim show">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center anim show">
          <Link href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 text-sm uppercase tracking-wide transition-colors rounded">
            Get Free Quote
          </Link>
          <Link href="/services/industrial-security"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-7 py-3 text-sm uppercase tracking-wide transition-colors rounded">
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs animate-bounce tracking-widest">
        SCROLL ↓
      </div>
    </section>
  );
}
