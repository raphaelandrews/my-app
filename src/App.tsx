import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/variables.css";

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
