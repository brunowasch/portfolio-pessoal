import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Events from "../components/Events";
import Contact from "../components/Contact";

function HomeEN() {
  return (
    <main className="text-white">
      <Hero />
      <Technologies />
      <Projects />
      <Events />
      <Contact />
    </main>
  );
}

export default HomeEN;
