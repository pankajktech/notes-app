import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { NoteAdded } from "./Message";
import { Input, Textarea, Button, Card } from "@material-tailwind/react";

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
    <div className="min-h-screen bg-blue-gray-50 flex flex-col justify-center items-center">
      {isNoteAdded && <NoteAdded />}
      <Button
        onClick={() => navigate("/add")}
        size="lg"
        variant="gradient"
        color="amber"
        className="group relative bottom-32 flex items-center overflow-hidden pr-[72px]"
      >
        Go to Notes
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <AiOutlineArrowRight className="text-white" />
        </span>
      </Button>
      <Card
        shadow="true"
        className=" w-[90%] lg:w-[450px] flex justify-center flex-col p-3  md:p-10 rounded-md"
      >
        <h1 className="text-xl text-white mb-5 text-center w-full">
          Add A Note
        </h1>
        <form onSubmit={AddNotes} className="flex flex-col">
          <div className="w-full my-5">
            <Input
              label="Enter Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="focus:text-white text-white"
              required
            />
          </div>
          <div className="w-full my-5">
            <Textarea
              label="Enter Description"
              type="text"
              value={description}
              size="lg"
              onChange={(e) => setDescription(e.target.value)}
              className="focus:text-white text-white"
              required
            />
          </div>
          <Button color="blue" className="mt-5" type="submit">
            Add Note
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewNotes;
