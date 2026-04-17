import { getProjectBySlug, getProjects } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-5xl mx-auto">
        <Link href="/projects" className="text-emerald-400 text-sm font-mono tracking-widest mb-8 inline-block hover:text-white transition-colors">
          &larr; ALL PROJECTS
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/50 max-w-2xl font-light">
                  {project.description}
              </p>
            </div>
            
            <div className="flex gap-6 text-sm font-mono tracking-widest uppercase text-white/40">
                <div>
                   <span className="block text-white mb-1">Client</span>
                   {project.client}
                </div>
                <div>
                   <span className="block text-white mb-1">Year</span>
                   {project.year}
                </div>
            </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden glass border border-white/10 mb-16 bg-white/5">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1 border-t border-white/10 pt-8">
                <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono px-3 py-2 glass rounded-full text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold mb-6">Case Study & Outcome</h3>
                <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed">
                    <p className="text-xl md:text-2xl text-white/90 font-light mb-8 italic border-l-2 border-emerald-400 pl-6">
                        "How do we push the web to its absolute rendering limits without sacrificing accessibility and SEO natively?"
                    </p>
                    <p>
                        {project.content}
                    </p>
                    <p className="mt-6">
                        The architecture relies heavily on highly decoupled components and custom state machines to minimize re-renders. Every element on the page was meticulously designed to ensure maximum interactivity while maintaining a perfectly solid 60FPS across all devices. The project was successfully delivered on time and resulted in a massive conversion rate increase.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </article>
  );
}
