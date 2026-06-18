"use client";
import siteData from "@/lib/data";
import { useEffect, useRef } from "react";

export default function AssociationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".assoc-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-6 bg-white">
      <style jsx>{`
        .assoc-card {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .assoc-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase red-line-center text-center mb-6">
          Our Associations
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {siteData.associations.map((a, i) => (
            <div
              key={i}
              className="assoc-card bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-red-400 hover:shadow-md transition-all w-32 h-32"
            >
              <img
                src={a.logo}
                alt={a.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}