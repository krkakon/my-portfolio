"use client";
import { useState } from "react";
import { getBlogs } from "@/lib/api";
import Link from "next/link";

export default function BlogIndex() {
  const blogs = getBlogs();
  
  // Extract unique categories from the blogs array
  const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category)))];
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8">THE <span className="text-indigo-400">BLOG.</span></h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                selectedCategory === category 
                  ? "bg-emerald-400 text-black border-emerald-400" 
                  : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">{blog.category}</span>
                  <span className="text-xs text-white/40">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight">{blog.title}</h3>
                <p className="text-white/50 text-sm line-clamp-3 mb-6 flex-grow">{blog.excerpt}</p>
                
                <div className="text-sm font-bold text-white/70 group-hover:text-emerald-400 transition-colors flex items-center gap-2 mt-auto">
                  Read Article &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State / Fallback */}
        {filteredBlogs.length === 0 && (
          <div className="py-20 text-center text-white/50 text-lg">
            No blogs found in this category.
          </div>
        )}

      </div>
    </main>
  );
}
