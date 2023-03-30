import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddTodo } from "../Redux/Action";

const AddDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const AddNote = (e) => {
    e.preventDefault();
    dispatch(AddTodo(title, description));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col">
      <h1 className="mx-auto text-xl my-5">Add Do</h1>
      <form
        onSubmit={AddNote}
        className="flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="Enter The Title"
          className="border-2 border-slate-500 p-1 w-96 my-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter The Description"
          className="border-2 border-slate-500 p-1 w-96 h-28 my-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-96 border-none bg-slate-900 hover:bg-slate-800 text-white p-2 my-5"
        >
          <Link to="/add">Add Note</Link>
        </button>
      </form>
    </div>
  );
};

export default AddDo;
