"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/lib/data";

export default function GallerySection() {
  const images = siteData.gallery;
  const [start, setStart] = useState(0);
  const per = 3;

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 anim">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Our Work</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase red-line">See Our Gallery</h2>
        </div>
        <div className="relative px-8">
          <div className="grid grid-cols-3 gap-3">
            {images.slice(start, start + per).map((src, i) => (
              <Link key={i} href="/gallery/event-gallery" className="img-zoom block rounded overflow-hidden aspect-video bg-gray-100">
                <img src={src} alt={`Gallery ${start + i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </Link>
            ))}
          </div>
          <button onClick={() => setStart(Math.max(0, start - 1))} disabled={start === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
            <ChevronLeft size={15} />
          </button>
          <button onClick={() => setStart(Math.min(images.length - per, start + 1))} disabled={start >= images.length - per}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
            <ChevronRight size={15} />
          </button>
        </div>
        <div className="text-center mt-7">
          <Link href="/gallery/event-gallery"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
