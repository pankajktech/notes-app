import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

const NewNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNoteAdded, setIsNoteAdded] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AddNotes = (e) => {
    e.preventDefault();
    dispatch(AddNOTE(title, description));
    setTitle("");
    setDescription("");

    setIsNoteAdded(true);
    setTimeout(() => {
      setIsNoteAdded(false);
    }, 1000);

    setTimeout(() => {
      navigate("/add");
    }, 1000);
  };

  return (
    <div className="min-h-screen relative bg-slate-900 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      {isNoteAdded && (
        <div className="alert alert-success shadow-lg w-72 z-20 absolute right-10 top-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Note Added Successfully!</span>
          </div>
        </div>
      )}
      <button
        onClick={() => navigate("/add")}
        className="mx-auto p-2 absolute w-52 top-10 btn btn-outline btn-accent mb-5"
      >
        My Notes
        <AiOutlineArrowRight className="ml-2" />
      </button>
      <div className=" w-1/3 bg-slate-800 flex justify-center flex-col  p-10 rounded-md drop-shadow-2xl ">
        <h1 className="text-xl border-b border-slate-100/25 mb-5 text-center w-full p-3">
          Add A New Note
        </h1>
        <form onSubmit={AddNotes} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter The Title"
            className="input input-bordered input-info w-full my-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Enter The Description"
            className="textarea textarea-bordered textarea-info w-full h-60 my-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-active btn-info w-full text-xl"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewNotes;
