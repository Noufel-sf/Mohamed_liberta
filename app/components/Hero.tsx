"use client"  ;
import React from "react";
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import { Sprout, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden lg:pt-15 flex items-center justify-center">
      {/* Animated decorative elements */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-32 left-16 hidden lg:block opacity-60"
      >
        <div className="w-28 h-28 bg-secondary/30 rounded-full blur-xl" />
      </motion.div>


      {/* Main content container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center px-4 md:px-6 lg:px-8 py-20 lg:py-10">
        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="mb-2"
        >
          {/* <Image
            src="/rokailogo.svg"
            alt="Rokai Logo"
            fetchPriority="high"
            loading="eager"
            className="w-48 lg:w-56 drop-shadow-lg"
          /> */}
          <h1>mohamed liberta</h1>
        </motion.div>

        {/* Main headline */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-5xl leading-tight"
        >
          كن جزءًا من عائلة
          <span className="relative z-10 text-primary"> رُقي للشباب</span>
          <br />
          <TypeAnimation
            sequence={[
              "وشارك في صناعة الفرق",
              2000,
              "Anytime, Anywhere",
              2000,
              "With Expert Mentors",
              2000,
              "For Your Family",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1> */}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl max-w-3xl font-light"
        >
          نقطة التقاء للشباب المبدعين. فرصة للخروج عن المهام اليومية والانطلاق
          في حل المشكلات بشكل إبداعي. مساحة للتخطيط وبناء التغيير.
          <br />
          <span className="text-primary font-medium">
            محفز لإنشاء مؤسسات تركز على الإنسان والطبيعة.
          </span>
        </motion.p>

        {/* Icon features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {[
            {
              icon: Sprout,
              label: "حماية الطبيعة",
              color: "text-primary",
              bgColor: "bg-primary/10",
            },
            {
              icon: Users,
              label: "بناء المجتمع",
              color: "text-secondary",
              bgColor: "bg-secondary/10",
            },
            {
              icon: Heart,
              label: "رعاية الأطفال",
              color: "text-secondary",
              bgColor: "bg-secondary/10",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div
                className={`${item.color} ${item.bgColor} p-4 hover:bg-third group bg-white rounded-2xl shadow-md group-hover:shadow-xl transition-all`}
              >
                <item.icon
                  className="w-8 h-8 group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12"
        >
          <Link href="/packs">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all"
            >
              اكتشاف العروض
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-6 text-sm text-slate-500"
        >
          ✨ ابدأ رحلتك في التغيير الإيجابي اليوم
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
