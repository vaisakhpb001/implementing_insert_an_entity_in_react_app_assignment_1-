// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  );
}

export default App;