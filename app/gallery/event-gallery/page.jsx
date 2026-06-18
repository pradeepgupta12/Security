// "use client";
// import { useState } from "react";
// import siteData from "@/lib/data";

// export default function EventGalleryPage() {
//   const [selected, setSelected] = useState(null);
//   const images = siteData.eventGallery;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="mb-8 anim">
//         <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Gallery</p>
//         <h1 className="text-2xl font-black uppercase red-line">See Our Event Gallery</h1>
//       </div>

//       {/* Masonry-style grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {images.map((src, i) => (
//           <div
//             key={i}
//             className="img-zoom rounded-lg overflow-hidden cursor-pointer anim"
//             style={{ transitionDelay: `${i * 60}ms` }}
//             onClick={() => setSelected(src)}
//           >
//             <img
//               src={src}
//               alt={`Event ${i + 1}`}
//               className="w-full object-cover"
//               style={{ height: i % 3 === 1 ? 220 : 180 }}
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selected && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelected(null)}
//         >
//           <button
//             className="absolute top-4 right-4 text-white text-3xl font-black w-10 h-10 flex items-center justify-center hover:text-red-400 transition-colors"
//             onClick={() => setSelected(null)}
//           >
//             ×
//           </button>
//           <img
//             src={selected}
//             alt="Event"
//             className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/lib/data";

export default function EventGalleryPage() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = siteData.eventGallery || [];

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSelected(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSelected(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
  };

  if (images.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600">No images found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1 text-center">
            Memories
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Memory Grid
            </span>
          </h1>
          <p className="text-center text-gray-500 text-sm mt-2">
            Click to view full size
          </p>
        </div>

        {/* Simple Gallery Grid - No extra elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative rounded-lg overflow-hidden cursor-pointer bg-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
              style={{
                aspectRatio: '1/1' // Square aspect ratio - image poori dikhegi
              }}
              onClick={() => {
                setCurrentIndex(i);
                setSelected(src);
              }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white/60 text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 text-white/50 hover:text-white transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  className="absolute right-4 text-white/50 hover:text-white transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selected}
              alt="Event"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}