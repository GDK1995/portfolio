import Home from "./sections/home";
import About from "./sections/about";
import Resume from "./sections/resume";
import Portfolio from "./sections/portfolio";
import Footer from './footer';
import TopBttn from "./items/TopBttn";
import { scrollTo } from '../store/functions';
import { useEffect, useState } from "react";

function main() {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScrollTopButtonVisiblity = () => {
    window.scrollY > 380 ? setShowTopButton(true) : setShowTopButton(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTopButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollTopButtonVisiblity);
    };
  }, [])

  // scroll to current part
  const [divId, setDivId] = useState('home');

  const handleDivId = (item) => { setDivId(item) };
  useEffect(() => {
    const coord = document.getElementById(divId).getBoundingClientRect();
    window.addEventListener("click", scrollTo(coord.top));
    return () => {
      window.removeEventListener("click", scrollTo(coord.top));
    };
  }, [divId])

  return (
    <>
      <main className="relative">
        <Home toScroll={handleDivId}/>
        <About />
        <Resume />
        <Portfolio />
        <Footer />
        {showTopButton && (<TopBttn toScroll={handleDivId}/>)}
      </main>
    </>
  )
}

export default main
