import React from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import './scss/app.scss'
const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage title="איתן" subtitle="תכולת הדרכה להכשרת פיילוט" Classification="סיווג"/>} />
          
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
