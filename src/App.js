import React from "react";
import "./App.css";

import Education from "./components/Education";
import Experience from "./components/Experience";
import WhoAmI from "./components/Whoami";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div class="max-w-screen-lg container mx-auto">
      <Header />
      <WhoAmI />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
