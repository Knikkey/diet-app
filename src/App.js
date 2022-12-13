import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Calories from "./pages/calories/Calories";
import Cico from "./pages/cico/Cico";
import Bmr from "./pages/Bmr/Bmr";
import Tdee from "./pages/tdee/Tdee";
import CountingCalories from "./pages/counting/CountingCalories";
import Faqs from "./pages/faqs/Faqs";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero id="home" />
      <Calories id="calories" />
      <Cico id="cico" />
      <Bmr id="bmr" />
      <Tdee id="tdee" />
      <CountingCalories id="counting" />
      <Faqs id="faqs" />
    </div>
  );
}

export default App;
