import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

const AddDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AddNote = (e) => {
    e.preventDefault();
    dispatch(AddTodo(title, description));
    setTitle("");
    setDescription("");
    navigate("/add");
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className=" w-1/3 bg-slate-100 flex justify-center flex-col  p-10 rounded-md shadow-md drop-shadow-2xl shadow-slate-100">
        <button
          onClick={() => navigate("/add")}
          className="mx-auto p-2 bg-gray-200 flex hover:bg-gray-300 rounded-md"
        >
          My Notes
          <AiOutlineArrowRight className="ml-2" />
        </button>
        <h1 className="mx-auto text-xl my-5 text-teal-800 underline">
          Add A New Note
        </h1>
        <form onSubmit={AddNote} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter The Title"
            className="border border-slate-900 bg-transparent focus:bg-slate-200 p-2 w-[500px] my-2 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Enter The Description"
            className="border border-slate-900 bg-transparent focus:bg-slate-200 p-2 w-[500px] min-h-[200px] my-2 focus:outline-none overflow-x-hidden"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-[500px] font-bold border-none bg-slate-900 text-white hover:bg-slate-800 p-2 my-5 "
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDo;
