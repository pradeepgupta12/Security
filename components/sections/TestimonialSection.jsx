"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/lib/data";

export default function TestimonialSection() {
  const [idx, setIdx] = useState(0);
  const items = siteData.testimonials;
  const t = items[idx];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center anim">
        <img src={t.avatar} alt={t.name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-red-600" loading="lazy" />
        <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
        <h3 className="font-black text-sm uppercase tracking-wide">{t.name}</h3>
        <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t.designation}</p>
        <div className="flex justify-center items-center gap-3 mt-6">
          <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
            <ChevronLeft size={13} />
          </button>
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-red-600" : "bg-gray-300"}`} />
          ))}
          <button onClick={() => setIdx(Math.min(items.length - 1, idx + 1))} disabled={idx === items.length - 1}
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
