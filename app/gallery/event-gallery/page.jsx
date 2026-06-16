"use client";
import { useState } from "react";
import siteData from "@/lib/data";

export default function EventGalleryPage() {
  const [selected, setSelected] = useState(null);
  const images = siteData.eventGallery;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 anim">
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Gallery</p>
        <h1 className="text-2xl font-black uppercase red-line">See Our Event Gallery</h1>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="img-zoom rounded-lg overflow-hidden cursor-pointer anim"
            style={{ transitionDelay: `${i * 60}ms` }}
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Event ${i + 1}`}
              className="w-full object-cover"
              style={{ height: i % 3 === 1 ? 220 : 180 }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-black w-10 h-10 flex items-center justify-center hover:text-red-400 transition-colors"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
          <img
            src={selected}
            alt="Event"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
