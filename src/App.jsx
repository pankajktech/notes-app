import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="bg-blue-50">
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
