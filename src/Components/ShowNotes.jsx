import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteNOTE, EditNOTE } from "../Redux/Action";

import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { NoteDeleted } from "./Message";

const ShowNotes = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isNoteDeleted, setIsNoteDeleted] = useState(false);

  const handleDelete = (index) => {
    dispatch(DeleteNOTE(index));
    setIsNoteDeleted(true);
    setTimeout(() => {
      setIsNoteDeleted(false);
    }, 1000);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(allNotes[index].title);
    setEditDescription(allNotes[index].description);
  };

  const handleSave = () => {
    dispatch(EditNOTE(editIndex, editTitle, editDescription));
    setEditIndex(null);

    setEditTitle("");
    setEditDescription("");
  };

  return (
    <div className="bg-slate-900 min-h-screen p-2 lg:p-10">
      <button
        onClick={() => navigate("/")}
        className="btn btn-outline btn-accent flex p-2 justify-center items-center mx-auto my-5"
      >
        <AiOutlineArrowLeft className="mr-2 " />
        Go To Add Note
      </button>

      <h1 className="text-3xl text-white text-center my-5">
        {allNotes.length === 0 && (
          <span className="text-red-500 font-mono">No Notes Found</span>
        )}
        {allNotes.length > 0 && <span className="">My Notes</span>}
      </h1>

      <div className="flex flex-wrap">
        {allNotes.map((NOTE, index) => (
          <div
            key={index}
            className="flex justify-between min-h-[200px] w-[90%] lg:w-[500px] bg-slate-800 text-white p-5 m-5 shadow-sm shadow-slate-100 rounded-md"
          >
            {editIndex === index ? (
              <div className="px-3">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="input w-full my-2"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="input w-full my-2 h-52"
                ></textarea>
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleSave}
                    className="bg-teal-400 text-white px-3 py-1 rounded-md hover:bg-teal-500 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl text-teal-400 font-semibold">
                  {NOTE.title}
                </h1>
                <p className="text-md mt-2 overflow-x whitespace-pre-wrap break-words ">
                  {NOTE.description}
                </p>
              </div>
            )}

            <div className="flex flex-col justify-center items-centr border-l border-slate-500">
              <button onClick={() => handleEdit(index)} className="">
                <FaEdit className="text-2xl ml-4 my-4 hover:text-teal-500" />
              </button>
              <button onClick={() => handleDelete(index)} className="">
                {isNoteDeleted && <NoteDeleted />}
                <AiFillDelete className="text-2xl ml-4 my-4 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowNotes;
