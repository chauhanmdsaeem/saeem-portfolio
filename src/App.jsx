import { useState } from "react";
import BootLoader from "./components/BootLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg)]">
      {!booted && <BootLoader onDone={() => setBooted(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
