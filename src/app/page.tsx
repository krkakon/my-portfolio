import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 500vh container for the scrolling section */}
      <section className="relative h-[500vh] bg-[#121212]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Standard flow follows the deep scrolling hero */}
      <Projects />
    </main>
  );
}
