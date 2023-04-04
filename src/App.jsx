import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewNotes />} />
          <Route path="/add" element={<ShowNotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
