import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Bmr from "./pages/Bmr/Bmr";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/bmr" element={<Bmr />} />
      </Routes>
    </div>
  );
}

export default App;
