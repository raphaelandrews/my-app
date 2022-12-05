import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/variables.css";
import "./App.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <div> 
        <Navbar />
      <Hero />
      <main>
        
      </main>
    </div>
  )
}

export default App;
