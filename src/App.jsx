import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { HeroTerminal } from "./components/HeroTerminal";
import { About } from "./components/About";
import { Hobbies } from "./components/Hobbies";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      duration: 800,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Navbar />
        <main>
          <HeroTerminal />
          <About />
          <Hobbies />
          <Gallery />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
