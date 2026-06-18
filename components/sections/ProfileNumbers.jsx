"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import siteData from "@/lib/data";
import {
  slideInLeft,
  slideInRight,
  slideInDown,
  slideInUp,
  statsCardReveal,
} from "@/lib/animations";

function ValuePill({ text }) {
  return (
    <div
      className="
     bg-[#43A7B2]
     text-white
     font-semibold
     text-sm
     xl:text-base
     rounded-full
     px-6
     xl:px-8
     py-3
     min-w-[260px]
     text-center
     shadow-md
     transition-all
     duration-300
     hover:-translate-y-1
     hover:shadow-lg
   "
    >
      {text}
    </div>
  );
}

export default function ProfileNumbers() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,167,178,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(31,75,153,0.08),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1F4B99] mb-6">
              Our Values, Your Satisfaction
            </h2>

            <p className="text-lg leading-9 text-slate-600">
              {siteData.ourProfile.description}
            </p>
          </motion.div>

          <div className="hidden lg:block">
            <div className="space-y-8">

              <motion.div
                variants={slideInDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <ValuePill text="Professionalism & Expertise" />
              </motion.div>

              <div className="flex justify-between gap-6">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ValuePill text="Eco-Friendly & Safe Cleaning" />
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ValuePill text="Efficiency & Reliability" />
                </motion.div>
              </div>

              <div className="flex justify-between gap-6">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ValuePill text="Integrity & Transparency" />
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ValuePill text="Continuous Improvement" />
                </motion.div>
              </div>

              <motion.div
                variants={slideInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <ValuePill text="Customer Satisfaction First" />
              </motion.div>
            </div>
          </div>

          <div className="lg:hidden flex flex-wrap justify-center gap-4">
            {[
              "Professionalism & Expertise",
              "Eco-Friendly & Safe Cleaning",
              "Efficiency & Reliability",
              "Integrity & Transparency",
              "Continuous Improvement",
              "Customer Satisfaction First",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <ValuePill text={item} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteData.stats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${index}`}
                custom={index}
                variants={statsCardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -5,
                }}
                className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-lg
              p-5
              min-h-[140px]
              flex
              flex-col
              justify-between
            "
              >
                <h4 className="text-lg font-bold text-[#1F4B99]">
                  {stat.label}
                </h4>

                <div className="text-[#43A7B2] text-4xl md:text-5xl font-black">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
