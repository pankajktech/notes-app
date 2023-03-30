import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDo from "./Components/AddDo";
import ShowDo from "./Components/ShowDo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<AddDo />} />
          <Route path="/add" element={<ShowDo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
