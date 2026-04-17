"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper to construct exact paths and active states
  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full glass border border-white/5 bg-black/20 w-[95%] md:w-[90%] max-w-3xl backdrop-blur-xl"
    >
      <Link href="/" className="font-bold text-base md:text-lg tracking-tight text-white mr-auto flex gap-2 items-center">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:block"></div>
        Kakon Roy<span className="text-white/30 hidden sm:inline">.</span>
      </Link>
      
      <ul className="flex items-center gap-4 md:gap-8 text-[11px] md:text-sm font-medium text-white/60">
        <li>
          <Link href="/overview" className={`transition-colors cursor-pointer block ${isActive('/overview') ? 'text-white' : 'hover:text-white'}`}>
            Overview
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`transition-colors cursor-pointer block ${isActive('/projects') ? 'text-emerald-400' : 'hover:text-white'}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className={`transition-colors cursor-pointer block ${isActive('/blog') ? 'text-emerald-400' : 'hover:text-white'}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="px-3 md:px-4 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors cursor-pointer text-[9px] md:text-xs font-bold uppercase tracking-wider block">
            Let's Talk
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
