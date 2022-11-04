import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Bmr from "./pages/Bmr/Bmr";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero id="home" />
      <Bmr id="bmr" />
    </div>
  );
}

export default App;
