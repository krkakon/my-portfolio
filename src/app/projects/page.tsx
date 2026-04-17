import { getProjects } from "@/lib/api";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsIndex() {
  const projects = getProjects();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-4">THE <span className="text-emerald-400">ARCHIVE.</span></h1>
        <p className="text-white/50 text-xl font-light mb-16 max-w-2xl">A comprehensive collection of 15 experiential websites, applications, and digital platforms.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, idx) => (
             <Link 
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group relative h-[400px] flex flex-col justify-end p-6 overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)] cursor-pointer"
            >
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-[#121212]/10 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-20 flex flex-col justify-end w-full h-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.slice(0,2).map(tag => (
                     <span key={tag} className="text-[9px] uppercase font-mono px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-end gap-2 relative">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight">{project.title}</h4>
                  </div>
                  
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-emerald-400 group-hover:text-black transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
