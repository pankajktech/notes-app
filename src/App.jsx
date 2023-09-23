import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";
import Header from "./Components/Header";
import BgImg from "../src/Images/bg.webp";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewNotes />} />
          <Route path="/notes" element={<ShowNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
