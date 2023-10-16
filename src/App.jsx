import "./App.css";
import { NavBar } from "./components/NavBar";
import { Pres } from "./components/Pres";
import { About } from "./components/About";
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
      </div>
    </>
  );
}

export default App;
