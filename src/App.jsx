import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNotes from "./Components/NewNotes";
import ShowNotes from "./Components/ShowNotes";

const App = () => {
  return (
    <div className="bg-[url(https://image.lexica.art/full_jpg/b7e84149-721a-4869-88cb-e7fbe7f283b6)] bg-cover bg-center bg-no-repeat backdrop-blur-sm bg-opacity-50">
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
