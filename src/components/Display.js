import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Display({ isLookingForJob }) {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <Home />
      <About isLookingForJob={isLookingForJob} />
      <Resume />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
