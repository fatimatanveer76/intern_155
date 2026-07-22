import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Curriculum from "./components/Curriculum";
import Benefits from "./components/Benefits";
import Certifications from "./components/Certifications";
 import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Curriculum />
      <Benefits />
    
      
      <Certifications /> 
      <Footer /> 
    </div>
  );
}

export default App;