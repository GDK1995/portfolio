import Home from "./sections/home";
import About from "./sections/about";
import Resume from "./sections/resume";
import Portfolio from "./sections/portfolio";
import Footer from './footer';
import TopBttn from "./items/TopBttn";
// import { useState } from "react";

function main() {
  // const [coord, setCoord] = useState(0);

  return (
    <>
      <main className="font-mono relative">
        <Home id="home"/>
        <About id="about"/>
        <Resume id="resume"/>
        <Portfolio id="portfolio"/>
        <Footer id="contact"/>
        <TopBttn />
      </main>
    </>
  )
}

export default main
