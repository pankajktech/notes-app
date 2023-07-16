import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <Card className=" w-[90%] lg:w-[450px] bg-white flex justify-center flex-col p-3  md:p-10 rounded-xl">
          <h1 className="text-xl mb-5 text-center w-full">Add Note</h1>
          <form onSubmit={AddNotes} className="flex flex-col">
            <div className="w-full my-5">
              <Input
                label="Enter Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="w-full my-5">
              <Textarea
                label="Enter Description"
                type="text"
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
      </motion.div>
    </div>
  );
};

export default NewNotes;
