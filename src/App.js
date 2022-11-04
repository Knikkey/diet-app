import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Bmr from "./pages/Bmr/Bmr";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/bmr" element={<Bmr />} />
      </Routes>
    </div>
  );
}

export default App;
