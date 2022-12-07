import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/variables.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Content />
      </main>
    </div>
  )
}

export default App;
