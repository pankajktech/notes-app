import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

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
      navigate("/notes");
    }, 1000);
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      {isNoteAdded && <NoteAdded />}

      <Card className=" w-[90%] lg:w-[450px]  bg-white flex justify-center flex-col p-3  md:p-10">
        <form onSubmit={AddNotes} className="flex flex-col">
          <div className="w-full my-5 ">
            <Input
              label="Enter Note Title"
              type="text"
              value={title}
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full my-5">
            <Textarea
              label="Enter Something....s"
              type="text"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={8}
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
