// "use client";

// import Link from "next/link";
// import siteData from "@/lib/data";
// import { useState } from "react";

// export default function ClientsSection() {
//   const doubled = [...siteData.clients, ...siteData.clients];
//   const [failedImages, setFailedImages] = useState({});
  
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center anim">
//           <div>
//             <h2 className="text-xl font-black uppercase red-line mb-3">Our Reputed Clients</h2>
//             <p className="text-gray-500 text-xs leading-relaxed">
//               Our client list represents itself with no issue. Since our earliest days, we've addressed all that from new businesses to Fortune 500 organizations.
//             </p>
//           </div>
//           <div className="md:col-span-2 overflow-hidden">
//             <div className="flex gap-5 marquee-inner" style={{ width: "max-content" }}>
//               {doubled.map((client, i) => (
//                 <div key={i}
//                   className="bg-white border border-gray-200 rounded px-3 py-2 flex items-center justify-center flex-shrink-0 hover:border-red-400 transition-colors"
//                   style={{ minWidth: 150, height: 70 }}>
//                   {failedImages[i] ? (
//                     <span className="text-xs font-bold text-gray-700 text-center">
//                       {client.name.length > 25 ? client.name.substring(0, 22) + '...' : client.name}
//                     </span>
//                   ) : (
//                     <img
//                       src={client.logo}
//                       alt={client.name}
//                       className="max-h-12 max-w-full object-contain"
//                       onError={() => {
//                         setFailedImages(prev => ({ ...prev, [i]: true }));
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <Link href="/clients"
//           className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
//           View All Clients
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import siteData from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ClientsSection() {
  const doubled = [...siteData.clients, ...siteData.clients];
  const [failedImages, setFailedImages] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const marqueeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Auto-play marquee animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="pt-16 pb-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 mb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <motion.div variants={titleVariants} className="lg:col-span-1">
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "60px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"
              />
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
                Our Reputed <span className="text-red-600">Clients</span>
              </h2>
              <motion.p
                variants={descriptionVariants}
                className="text-gray-600 text-sm leading-relaxed max-w-md"
              >
                Our client list represents itself with no issue. Since our earliest days, 
                we've addressed all that from new businesses to Fortune 500 organizations.
              </motion.p>
            </div>
          </motion.div>

          {/* Marquee Carousel */}
          <motion.div
            variants={marqueeVariants}
            className="lg:col-span-2 overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-5"
              style={{ width: "max-content" }}
              animate={{
                x: isHovered ? 0 : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: isHovered ? 0.5 : 25,
                  ease: "linear",
                  repeat: isHovered ? 0 : Infinity,
                },
              }}
            >
              {doubled.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: (i % siteData.clients.length) * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
                    borderColor: "#dc2626",
                  }}
                  className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex items-center justify-center flex-shrink-0 transition-all duration-300 cursor-pointer"
                  style={{ minWidth: 160, height: 75 }}
                >
                  {failedImages[i] ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs font-bold text-gray-700 text-center px-2"
                    >
                      {client.name.length > 25 ? client.name.substring(0, 22) + '...' : client.name}
                    </motion.span>
                  ) : (
                    <motion.img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 max-w-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [i]: true }));
                      }}
                      loading="lazy"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Button - Simplified */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate={controls}
        className="text-center relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/clients"
            className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-10 py-3.5 text-sm uppercase tracking-wider rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
          >
            View All Clients
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}