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
    <section ref={sectionRef} className="py-12 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase red-line-center text-center mb-8 anim">
          Our Associations
        </h2>
        <div className="flex flex-wrap justify-center gap-5 anim">
          {siteData.associations.map((a, i) => (
            <div
              key={i}
              className="assoc-card bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-red-400 hover:shadow-md transition-all w-32 h-32 opacity-0 translate-y-10 scale-95"
              style={{
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <style jsx>{`
                .assoc-card.show {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
                .assoc-card:nth-child(odd).show {
                  animation: slideLeft 0.6s ease forwards;
                }
                .assoc-card:nth-child(even).show {
                  animation: slideRight 0.6s ease forwards;
                }
                @keyframes slideLeft {
                  0% {
                    opacity: 0;
                    transform: translateX(-50px) scale(0.9);
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                  }
                }
                @keyframes slideRight {
                  0% {
                    opacity: 0;
                    transform: translateX(50px) scale(0.9);
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                  }
                }
              `}</style>
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