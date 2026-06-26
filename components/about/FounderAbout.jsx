"use client";

import AboutSidebar from "@/components/layout/AboutSidebar";
import siteData from "@/lib/data";
import { motion } from "framer-motion";
import {
  founderContainer,
  founderHeading,
  founderCard,
  founderImage,
  founderContent,
} from "@/lib/animations";

export default function FounderAbout() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <AboutSidebar />

          <div className="flex-1 min-w-0">
            <motion.div
              className="mb-10"
              variants={founderHeading}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-[0.2em]">
                Leadership Team
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Meet Our Founders
              </h1>

              <div className="w-20 h-0.5 bg-red-600 rounded-full mt-4" />

              <p className="mt-4 text-base text-slate-600 max-w-3xl leading-7">
                The visionaries behind LFM Group who have built a trusted name
                in security and facility management through dedication,
                professionalism, and years of industry expertise.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={founderContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {siteData.about.founders.map((f, i) => (
                <motion.div
                  key={i}
                  variants={founderCard}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-lg
                    hover:border-red-200
                    transition-all
                    duration-300
                    border
                    border-slate-100
                  "
                >
                  <div
                    className={`grid md:grid-cols-2 h-[320px] ${
                      i % 2 !== 0
                        ? "md:[&>*:first-child]:order-2"
                        : ""
                    }`}
                  >
                    <motion.div
                      variants={founderImage}
                      className="relative overflow-hidden bg-slate-100 h-full"
                    >
                      <img
                        src={f.imageUrl}
                        alt={f.name}
                        loading="lazy"
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                      variants={founderContent}
                      className="p-6 md:p-8 flex flex-col justify-center h-full"
                    >
                      <span
                        className="
                          inline-flex
                          w-fit
                          px-3
                          py-1
                          rounded-full
                          bg-red-50
                          text-red-600
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          mb-3
                        "
                      >
                        {f.role}
                      </span>

                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                        {f.name}
                      </h2>

                      <div className="w-16 h-0.5 bg-red-600 rounded-full mb-4" />

                      <p className="text-slate-600 leading-7 text-sm md:text-base">
                        {f.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
