import "./App.css";
import WhoAmI from "./components/Whoami";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg container mx-auto">
        <WhoAmI />
        <Experience />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
