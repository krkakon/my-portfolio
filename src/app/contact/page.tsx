"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link dynamically
    const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Redirect to native mail client (e.g., Gmail)
    window.location.href = `mailto:kakonroy2286@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-center">LET'S <span className="text-blue-400">TALK.</span></h1>
        
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pt-2"></div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" 
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-mono">Message</label>
              <textarea 
                rows={5} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none" 
                placeholder="Tell me about your visionary project..."
              ></textarea>
            </div>
            
            <button type="submit" className="bg-white text-black font-bold uppercase tracking-wider py-4 rounded-xl mt-4 hover:bg-emerald-400 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
