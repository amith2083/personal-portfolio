import About from "@/components/sub/About";
import Contact from "@/components/sub/Contact";
import Hero from "@/components/sub/Hero";
import Load from "@/components/sub/Load";
import Navbar from "@/components/sub/Navbar";
import Projects from "@/components/sub/Projects";
import Skills from "@/components/sub/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Load/>
    <Navbar/>
    <div ><Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  );
}
