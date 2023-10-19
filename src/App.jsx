import "./App.css";
import { NavBar } from "./components/NavBar";
import { Pres } from "./components/Pres";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <div className="app">
        <div className="nav">
          <NavBar></NavBar>
        </div>
        <div className="Presentation">
          <Pres></Pres>
          <About></About>
        </div>
        <div className="portfolio">
          <Projects></Projects>
        </div>
        <div className="contact">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
