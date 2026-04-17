import { getBlogBySlug, getBlogs } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getBlogs().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-emerald-400 text-sm font-mono tracking-widest mb-8 inline-block hover:text-white transition-colors">
          &larr; BACK TO BLOG
        </Link>
        
        <div className="flex gap-4 items-center mb-6">
          <span className="px-3 py-1 glass rounded-full text-xs font-bold text-white/80 border border-white/10 uppercase tracking-wider">{post.category}</span>
          <span className="text-sm text-white/40">{post.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border border-white/10 mb-12 bg-white/5">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed marker:text-emerald-400">
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 italic border-l-2 border-emerald-400 pl-6">
            {post.excerpt}
          </p>
          <p>
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
}
