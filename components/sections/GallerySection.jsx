


// "use client";

// import { motion, useReducedMotion, useInView } from "framer-motion";
// import { ArrowUpRight, Sparkles } from "lucide-react";
// import Link from "next/link";
// import { useRef } from "react";
// import siteData from "@/lib/data";

// // Layout pattern for the masonry grid — kept exactly as before
// const layoutPattern = [
//   { span: "md:col-span-2 md:row-span-2", size: "large" },
//   { span: "", size: "small" },
//   { span: "", size: "small" },
//   { span: "md:col-span-2", size: "medium" },
// ];

// // Build items from dynamic gallery data, applying the same 4 layout slots
// const items = siteData.eventGallery.slice(0, 4).map((image, index) => ({
//   image,
//   span: layoutPattern[index].span,
//   size: layoutPattern[index].size,
// }));

// // Animation variants
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.05,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const headerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: 0.1,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function GallerySection() {
//   const reduce = useReducedMotion();
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-10 sm:py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50"
//     >
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-red-100/20 blur-[150px]" />
//         <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-100/20 blur-[150px]" />
//         <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/10 blur-[200px]" />
//       </div>

//       <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
//         {/* Header */}
//         <motion.div
//           variants={headerVariants}
//           initial={reduce ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-600 backdrop-blur-sm shadow-sm"
//           >
//             <Sparkles className="size-3.5 text-red-500" aria-hidden />
//             Our Gallery
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
//           >
//             See Our{" "}
//             <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
//               Gallery
//             </span>
//           </motion.h2>

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "60px" }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mx-auto mt-6 h-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-400"
//           />
//         </motion.div>

//         {/* Masonry Grid */}
//         <motion.ul
//           variants={containerVariants}
//           initial={reduce ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[260px]"
//         >
//           {items.map((item, index) => (
//             <motion.li
//               key={index}
//               variants={cardVariants}
//               className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${item.span || ""}`}
//             >
//               <Link href="/gallery/event-gallery" className="block w-full h-full">
//                 <div className="w-full h-full bg-gray-200 overflow-hidden">
//                   <motion.img
//                     src={item.image}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                   />
//                 </div>
                
//                 {/* Hover Overlay */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
//                 >
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     whileHover={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.4 }}
//                     className="flex flex-col items-center gap-2"
//                   >
                    
//                   </motion.div>
//                 </motion.div>
//               </Link>
//             </motion.li>
//           ))}
//         </motion.ul>

//         {/* CTA Button */}
//         <motion.div
//           variants={buttonVariants}
//           initial={reduce ? "visible" : "hidden"}
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             <Link
//               href="/gallery/event-gallery"
//               className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40"
//             >
//               <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-red-700 to-red-600 transition-transform duration-500 group-hover:translate-y-0" />
//               <span className="transition-colors duration-500 group-hover:text-white">
//                 View Full Gallery
//               </span>
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="transition-colors duration-500 group-hover:text-white"
//               >
//                 <ArrowUpRight className="size-4" aria-hidden />
//               </motion.span>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Layout pattern for the masonry grid
const layoutPattern = [
  { span: "md:col-span-2 md:row-span-2", size: "large" },
  { span: "", size: "small" },
  { span: "", size: "small" },
  { span: "md:col-span-2", size: "medium" },
];

// Local gallery images from public/images/gallery/
const galleryImages = [
  "/images/gallery/G1.jpeg",
  "/images/gallery/G2.jpeg",
  "/images/gallery/G3.jpeg",
  "/images/gallery/G4.jpeg",
  "/images/gallery/G5.jpeg",
  "/images/gallery/G6.jpeg",
  "/images/gallery/G7.jpeg",
];

// Apply the 4 layout slots to the first 4 images
const items = galleryImages.slice(0, 4).map((image, index) => ({
  image,
  span: layoutPattern[index].span,
  size: layoutPattern[index].size,
}));

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GallerySection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 sm:py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-red-100/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-100/20 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/10 blur-[200px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-600 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="size-3.5 text-red-500" aria-hidden />
            Our Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            See Our{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-400"
          />
        </motion.div>

        {/* Masonry Grid */}
        <motion.ul
          variants={containerVariants}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[260px]"
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${item.span || ""}`}
            >
              <Link href="/gallery/event-gallery" className="block w-full h-full">
                <div className="w-full h-full bg-gray-200 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-2"
                  >
                  </motion.div>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          variants={buttonVariants}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/gallery/event-gallery"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40"
            >
              <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-red-700 to-red-600 transition-transform duration-500 group-hover:translate-y-0" />
              <span className="transition-colors duration-500 group-hover:text-white">
                View Full Gallery
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="transition-colors duration-500 group-hover:text-white"
              >
                <ArrowUpRight className="size-4" aria-hidden />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}