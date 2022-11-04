import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Bmr from "./pages/Bmr/Bmr";
import Faqs from "./pages/faqs/Faqs";

import "./App.css";
import Basics from "./pages/basics/Basics";
import Tdee from "./pages/tdee/Tdee";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero id="home" />
      <Basics id="basics" />
      <Bmr id="bmr" />
      <Tdee id="tdee" />
      <Faqs id="faqs" />
    </div>
  );
}

export default App;
