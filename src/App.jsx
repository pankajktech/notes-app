import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";
import img from "./Images/BgImg.jpg";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewNotes />} />
          <Route path="/add" element={<ShowNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
