import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Skills from './components/Skills'; 
export default function Home() {
  return (
    <>
  
    <div className="flex items-center justify-center pb-20 pt-28">
      
      <Hero />
    </div>
    <Projects />
    <div className="flex items-center justify-center pb-20 pt-20">
    <Skills />
    </div>
   
   
  </>
  );
}