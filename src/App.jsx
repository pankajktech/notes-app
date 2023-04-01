import React from "react";
import AddDo from "./Components/AddDo";
import ShowDo from "./Components/ShowDo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddDo />} />
          <Route path="/add" element={<ShowDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
