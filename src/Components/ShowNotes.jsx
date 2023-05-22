import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { NoteDeleted, NoteEdited } from "./Message";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
} from "@material-tailwind/react";
import { DeleteNOTE, EditNOTE } from "../Redux/Action";

const ShowNotes = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isNoteDeleted, setIsNoteDeleted] = useState(false);
  const [isNoteEdited, setisNoteEdited] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    setIsDialogOpen(true);
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
    <div className="min-h-screen bg-blue-gray-100 p-2 lg:p-10">
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}

      <div className="flex flex-col md:flex-row justify-center items-center">
        <Button
          onClick={() => navigate("/")}
          variant="gradient"
          color="light-blue"
          className="my-3 group relative flex items-center gap-3 overflow-hidden pl-[72px] mx-3"
        >
          <span className="absolute left-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
            <AiOutlineArrowLeft className="text-black" />
          </span>
          Add Notes
        </Button>

        <Button
          onClick={() => navigate("/add")}
          variant="gradient"
          color="deep-orange"
          className="my-3 group relative flex items-center gap-3 overflow-hidden pr-[72px]"
        >
          Total Notes
          <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
            {allNotes.length}
          </span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allNotes.map((note, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
            key={index}
          >
            <Card
              shadow={true}
              className="flex shadow-lg bg-white flex-row justify-between min-h-[200px] w-[90%] lg:w-[500px] p-5 m-5 drop-shadow-2xl rounded-md"
            >
              {editIndex === index ? (
                <Dialog
                  open={isDialogOpen}
                  onClose={() => setIsDialogOpen(false)}
                  className="bg-transparent shadow-none flex justify-center items-center"
                >
                  <Card className="mx-auto w-[95vh] md:w-[30rem]">
                    <div className="flex justify-center my-2">
                      <Typography variant="h5">Edit Note</Typography>
                    </div>
                    <CardBody className="flex flex-col gap-4">
                      <Input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        label="Title"
                      />
                      <Textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        label="Description"
                        rows={10}
                      />
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-center gap-3">
                      <Button color="red" onClick={() => setEditIndex(null)}>
                        Cancel
                      </Button>
                      <Button color="green" onClick={handleSave}>
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Dialog>
              ) : (
                <div>
                  <h1 className="text-2xl text-gray-900 font-semibold">
                    {note.title}
                  </h1>
                  <p className="text-md mt-2 overflow-x whitespace-pre-wrap break-words">
                    {note.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col justify-center items-centr border-l border-slate-500">
                <button onClick={() => handleEdit(index)}>
                  <FaEdit className="text-2xl ml-4 my-4 hover:text-teal-500" />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <AiFillDelete className="text-2xl ml-4 my-4 hover:text-red-500" />
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowNotes;
