import About from "./about/About";
import "./App.css";
import Contact from "./contact/Contact";
import First from "./first/First";
import Card from "./works/Card";
import Works from "./works/Works";


function App() {
  return (
    <div className="container">
      <First />
      <About />
      <Contact />
      <Works />
    </div>
  );
}

export default App;
