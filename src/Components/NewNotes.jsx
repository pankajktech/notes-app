import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NoteAdded } from "./Message";

const NewNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNoteAdded, setIsNoteAdded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startListenings = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListenings = () => SpeechRecognition.stopListening();

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

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
    <div className="max-md:max-h-screen min-h-screen backdrop-blur-md flex flex-col justify-center items-center">
      {isNoteAdded && <NoteAdded />}
      <button
        onClick={() => navigate("/add")}
        className="mx-auto px-3 absolute w-52 top-10 btn btn-active btn-info mb-2"
      >
        My All Notes
        <AiOutlineArrowRight className="ml-2" />
      </button>
      <div className=" w-[90%] lg:w-1/3 bg-slate-800 flex justify-center flex-col p-3  md:p-10 rounded-lg drop-shadow-2xl ">
        <h1 className="text-xl text-slate-200 border-b border-slate-100/25 mb-5 text-center w-full p-2">
          Add A New Note
        </h1>
        <form onSubmit={AddNotes} className="form-control text-white">
          <input
            type="text"
            placeholder="Enter The Title"
            className="input input-secondary input-ghost w-full my-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Enter The Description"
            className="textarea textarea-secondary textarea-ghost w-full h-60 my-5"
            value={description || transcript}
            onChange={(e) => setDescription({ transcript } || e.target.value)}
            onBlur={stopListenings}
            required
          />
          <button type="submit" className="btn btn-secondary  w-full text-xl">
            Add Note
          </button>
        </form>
        <div className="flex justify-center items-center">
          <button
            onClick={startListenings}
            className="btn btn-active btn-info mt-5 mx-3"
          >
            {
              <FaMicrophone
                className="mr-2 text-xl"
                style={{ color: listening ? "red" : "black" }}
              />
            }
            Start
          </button>
          <button
            onClick={stopListenings}
            className="btn btn-active btn-primary mt-5 mx-3"
          >
            <FaMicrophoneSlash className="mr-2 text-xl" />
            Stop
          </button>
          {transcript && (
            <button
              onClick={() => setDescription({ transcript })}
              className="btn btn-active btn-success mt-5 mx-3"
            >
              Use
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewNotes;
