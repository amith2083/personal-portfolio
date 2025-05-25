import About from "@/components/sub/About";
import Hero from "@/components/sub/Hero";
import Projects from "@/components/sub/Projects";
import Skills from "@/components/sub/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div ><Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  );
}
