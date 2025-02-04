import { AboutMe } from "../components/about";
import { Contact } from "../components/contact";
import { Hero } from "../components/hero";
import { Posts } from "../components/posts";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { PARTICLES_OPTIONS } from "../const";
import { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

const Home = () => {
  return (
    <div>
      <title>Home | Mozzesdev</title>
      <Hero />
      <ParticlesContainer />
      <main className="relative z-10">
        <Projects />
        <Posts />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
};


const ParticlesContainer = () => {
    const [init, setInit] = useState(false);
  
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = async (container?: Container): Promise<void> => {
      if (!container) return;
    };
  
    return (
      <>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={PARTICLES_OPTIONS}
          />
        )}
      </>
    );
  };

export default Home;
