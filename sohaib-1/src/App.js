import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import LandingPage from "./components/LandingPage";
import Header from "./components/LandingPages/Header";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
