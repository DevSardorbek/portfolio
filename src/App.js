import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/cualification/Qualification";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Qualification /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
