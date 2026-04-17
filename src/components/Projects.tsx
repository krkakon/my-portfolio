import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/api";
import Link from "next/link";

export default function Projects() {
  const projects = getProjects().slice(0, 4);

  return (
    <section id="projects" className="relative w-full bg-[#121212] py-20 md:py-32 px-4 md:px-8 min-h-screen z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Premium Header Layout */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 md:pb-12">
          <div>
            <h3 className="text-emerald-400 text-xs md:text-sm uppercase tracking-[0.3em] font-mono mb-4 md:mb-6">Selected Work</h3>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              FEATURED <br className="hidden md:block"/><span className="text-white/30">PROJECTS.</span>
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-3 mt-8 md:mt-0 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm">
            VIEW ALL WORK <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, idx) => (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id}
              className={`group relative h-[450px] flex flex-col justify-end p-8 overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)] cursor-pointer ${idx === 1 || idx === 2 ? 'md:mt-16' : ''}`}
            >
              {/* Image Layer */}
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-[#121212]/10 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-20 flex flex-col justify-end w-full h-full transform transition-transform duration-500 group-hover:translate-y-[-10px] pointer-events-none">
                <div className="flex gap-2 mb-6 flex-wrap pointer-events-auto">
                  {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] uppercase font-mono px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-end gap-4 relative">
                  <div>
                    <h4 className="text-3xl font-bold mb-3 tracking-tight">{project.title}</h4>
                    <p className="text-white/70 max-w-sm text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-emerald-400 group-hover:text-black transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
