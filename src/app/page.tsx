import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from './components/Skills'; 

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 pb-20 pt-28">
        <Hero />
      </div>

      <div className="px-4">
        <Projects />
      </div>

      <div className="flex flex-col items-center justify-center px-4 pb-20 pt-20">
        <Skills />
      </div>
    </>
  );
}
