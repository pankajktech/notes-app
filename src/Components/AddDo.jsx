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
    <div className="min-h-screen bg-slate-900 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <button
        onClick={() => navigate("/add")}
        className="mx-auto p-2 absolute w-52 top-10 btn btn-outline btn-accent mb-5"
      >
        My Notes
        <AiOutlineArrowRight className="ml-2" />
      </button>
      <div className=" w-1/3 bg-slate-800 flex justify-center flex-col  p-10 rounded-md shadow-md drop-shadow-2xl shadow-pink-500">
        <h1 className="mx-auto text-2xl font-serif font-semibold border-b border-slate-100/25 mb-5 to-slate-900 text-center w-full p-3">
          Add A New Note
        </h1>
        <form onSubmit={AddNote} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter The Title"
            className="input input-bordered input-secondary w-full my-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Enter The Description"
            className="textarea textarea-secondary w-full h-60 my-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-active btn-secondary w-full">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDo;
