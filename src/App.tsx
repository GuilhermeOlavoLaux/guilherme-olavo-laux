import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Carousel from "./components/Carousel/Carousel";
import { TechSkills } from "./components/TechSkills/TechSkills";

export default function App() {
  return (
    <div className="App">
      <AboutMe />
      <Carousel />
      <TechSkills />
    </div>
  );
}
