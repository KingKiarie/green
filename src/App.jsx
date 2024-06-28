import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
