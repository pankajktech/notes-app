import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewNotes />} />
        <Route path="/add" element={<ShowNotes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
