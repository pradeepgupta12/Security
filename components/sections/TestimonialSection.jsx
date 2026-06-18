// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import siteData from "@/lib/data";

// export default function TestimonialSection() {
//   const [idx, setIdx] = useState(0);
//   const items = siteData.testimonials;
//   const t = items[idx];

//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-2xl mx-auto px-4 text-center anim">
//         <img src={t.avatar} alt={t.name}
//           className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-red-600" loading="lazy" />
//         <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
//         <h3 className="font-black text-sm uppercase tracking-wide">{t.name}</h3>
//         <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t.designation}</p>
//         <div className="flex justify-center items-center gap-3 mt-6">
//           <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}
//             className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
//             <ChevronLeft size={13} />
//           </button>
//           {items.map((_, i) => (
//             <button key={i} onClick={() => setIdx(i)}
//               className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-red-600" : "bg-gray-300"}`} />
//           ))}
//           <button onClick={() => setIdx(Math.min(items.length - 1, idx + 1))} disabled={idx === items.length - 1}
//             className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30">
//             <ChevronRight size={13} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import siteData from "@/lib/data";

const AUTO_SLIDE_INTERVAL = 5000;

export default function TestimonialSection() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = siteData.testimonials || [];
  const t = items[idx];
  const resumeTimeout = useRef(null);

  const goTo = useCallback(
    (nextIdx, dir) => {
      setDirection(dir);
      setIdx(nextIdx);
      setIsPaused(true);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      resumeTimeout.current = setTimeout(() => setIsPaused(false), AUTO_SLIDE_INTERVAL);
    },
    []
  );

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  const handlePrev = () => {
    const nextIdx = idx === 0 ? items.length - 1 : idx - 1;
    goTo(nextIdx, -1);
  };

  const handleNext = () => {
    const nextIdx = idx === items.length - 1 ? 0 : idx + 1;
    goTo(nextIdx, 1);
  };

  const handleDotClick = (index) => {
    if (index === idx) return;
    goTo(index, index > idx ? 1 : -1);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  if (items.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-400">No testimonials available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-red-600" />
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <div className="h-1 w-[60px] bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 text-red-100 opacity-50">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 text-red-100 opacity-50 transform rotate-180">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-gray-200/50 p-6 sm:p-8 md:p-10 border border-gray-100/50">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={idx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-400 opacity-75 blur-md" />
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto object-cover border-2 border-white shadow-lg"
                    loading="lazy"
                  />
                </div>

                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed my-4 sm:my-6 max-w-2xl mx-auto italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div>
                  <h3 className="font-black text-sm sm:text-base uppercase tracking-wide text-gray-900">
                    {t.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="w-6 h-px bg-red-400" />
                    <p className="text-gray-400 text-xs uppercase tracking-widest">
                      {t.designation}
                    </p>
                    <span className="w-6 h-px bg-red-400" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 order-2 sm:order-1">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`relative transition-all duration-300 ${
                      i === idx
                        ? "w-6 h-2.5 bg-red-600 rounded-full"
                        : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-lg hover:shadow-red-500/25"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-lg hover:shadow-red-500/25"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
              <motion.div
                key={`${idx}-${isPaused}`}
                initial={{ width: 0 }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: isPaused ? 0 : AUTO_SLIDE_INTERVAL / 1000, ease: "linear" }}
                className="h-full bg-gradient-to-r from-red-600 to-red-400"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          {idx + 1} of {items.length} testimonials
        </p>
      </div>
    </section>
  );
}