import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
