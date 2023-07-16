import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
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
    setisNoteEdited(true);
    setTimeout(() => {
      setisNoteEdited(false);
    }, 1000);
  };

  return (
    <div className="p-2 lg:p-10">
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5">
        {allNotes.map((note, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
            key={index}
          >
            <Card
              shadow={false}
              className="flex bg-white flex-row justify-between min-h-[400px] w-[90%] lg:w-[500px] p-5 rounded-xl relative group overflow-hidden"
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
                        rows={15}
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
              <div className="absolute top-0 left-0 p-5 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-20 rounded-lg flex items-center gap-4 justify-center">
                <Button
                  onClick={() => handleEdit(index)}
                  className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                >
                  <FaEdit size={25} />
                </Button>

                <Button
                  onClick={() => handleDelete(index)}
                  className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                >
                  <AiFillDelete size={25} />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowNotes;
