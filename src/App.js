import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import Found from "./pages/Found";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/*" element={<Found />} />
      </Routes>
    </>
  );
}

export default App;
