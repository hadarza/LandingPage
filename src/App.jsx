import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import './scss/app.scss'
const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage title="איתן" subtitle="תכולת הדרכה להכשרת פיילוט" Classification="שמור"/>} />
          
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
