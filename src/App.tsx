import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Carousel from "./components/Carousel/Carousel";
import Stack from "./components/Stack/Stack";

export default function App() {
  return (
    <div className="App">
      <AboutMe />
      <Carousel />
      <Stack />
    </div>
  );
}
