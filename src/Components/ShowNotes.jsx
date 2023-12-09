import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  if (allNotes.length === 0) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <h1 className="text-3xl bg-white p-5 font-bold rounded-md">
          No Notes Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-2 lg:p-10 ">
      {isNoteDeleted && <NoteDeleted />}
      {isNoteEdited && <NoteEdited />}

      <div className="flex flex-wrap gap-5">
        {allNotes.map((note, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div
              shadow={false}
              className="flex bg-white flex-wrap justify-between  min-w-[95vw] lg:min-w-[200px] relative group overflow-hidden"
            >
              {editIndex === index ? (
                <Dialog
                  open={isDialogOpen}
                  onClose={() => setIsDialogOpen(false)}
                  className="bg-transparent shadow-none flex justify-center items-center"
                >
                  <Card className="mx-auto rounded-none w-[95vh] md:w-[30rem]">
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
                <div className="w-full p-5">
                  <h1 className="text-2xl text-center text-black font-semibold">
                    {note.title}
                  </h1>
                  <p className="text-md text-black mt-2 overflow-x whitespace-pre-wrap break-words">
                    {note.description}
                  </p>
                </div>
              )}
              <div className="absolute top-0 left-0 p-5 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full flex items-center gap-4 justify-center">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowNotes;
