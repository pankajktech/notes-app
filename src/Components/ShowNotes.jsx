import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteNOTE, EditNOTE } from "../Redux/Action";

import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { NoteDeleted, NoteEdited } from "./Message";
import { Input, Textarea, Button } from "@material-tailwind/react";

const ShowNotes = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isNoteDeleted, setIsNoteDeleted] = useState(false);
  const [isNoteEdited, setisNoteEdited] = useState(false);

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
    setisNoteEdited(true);
    setTimeout(() => {
      setisNoteEdited(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-2 lg:p-10">
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}

      <div className="flex justify-center items-center">
        <Button
          onClick={() => navigate("/")}
          buttonType="link"
          size="lg"
          variant="gradient"
          color="light-blue"
          className="group relative flex items-center gap-3 overflow-hidden pl-[72px] mx-3"
        >
          <span className="absolute left-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
            <AiOutlineArrowLeft className="text-white" />
          </span>
          Go Back to Add Notes
        </Button>

        <Button
          onClick={() => navigate("/add")}
          buttonType="link"
          size="lg"
          variant="gradient"
          color="deep-orange"
          className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
        >
          Total Notes
          <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
            {allNotes.length}
          </span>
        </Button>
      </div>

      <div className="flex flex-wrap">
        {allNotes.map((NOTE, index) => (
          <div
            key={index}
            className="flex justify-between min-h-[200px] w-[90%] lg:w-[500px] bg-black text-white p-5 m-5 drop-shadow-2xl rounded-md"
          >
            {editIndex === index ? (
              <div className="px-3">
                <div className="flex flex-col w-72 gap-6 text-white">
                  <Input
                    variant="static"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="focus:text-white text-white"
                  />
                </div>
                <div className="flex flex-col w-72 my-6 text-white">
                  <Textarea
                    variant="static"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="focus:text-white text-white"
                  />
                </div>
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
