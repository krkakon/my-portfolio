"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 logic (0 to 20% fade out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2 logic (30% fade in, 60% fade out)
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.65], [100, -100]);

  // Section 3 logic (75% fade in, 100% fade out)
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.75, 1], [100, -100]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 h-full pointer-events-none font-sans">
      
      {/* Section 1: 0% scroll */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="px-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-4 md:mb-6 hover:scale-105 transition-transform duration-700 leading-none">
            CREATIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500">DEVELOPER</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/50 font-light max-w-xl mx-auto">
            Crafting immersive digital experiences through code and motion.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2: 30% scroll */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center p-4 md:p-8 md:pl-32"
      >
        <div className="p-6 md:p-12 glass rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-2xl w-full max-w-[90%] md:max-w-none md:w-auto">
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl leading-tight relative z-10">
            I engineer digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">masterpieces.</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/60 max-w-md font-light">
            Merging logic and aesthetics to create seamless user journeys that captivate and engage.
          </p>
        </div>
      </motion.div>

      {/* Section 3: 60% scroll */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center p-4 md:p-8 md:pr-32 text-right"
      >
         <div className="p-6 md:p-12 glass rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-2xl text-left bg-black/40 w-full max-w-[90%] md:max-w-none md:w-auto">
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl leading-tight relative z-10">
            Bridging the gap between <br />
            <span className="text-white/40 italic">vision and reality.</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/60 max-w-md font-light ml-auto">
            From concept to deployment, ensuring every pixel and interaction feels just right.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
