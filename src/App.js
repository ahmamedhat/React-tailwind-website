import React from "react";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Packages from "./components/Packages";

function App() {
  return (
    <div>
      <Navbar />
      <div className="duration-300" id="app">
        <Hero />
        <Analytics />
        <NewsLetter />
        <Packages />
        <Footer />
      </div>
    </div>
  );
}

export default App;
