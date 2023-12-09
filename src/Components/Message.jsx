import { Alert } from "@material-tailwind/react";

export const NoteAdded = () => {
  return (
    <Alert className="drop-shadow-lg flex justify-center absolute top-10 right-10 w-48 rounded-none bg-[#161716] font-bold text-white">
      Note Added
    </Alert>
  );
};

export const NoteDeleted = () => {
  return (
    <Alert className="drop-shadow-lg flex justify-center absolute top-10 right-10 w-48 rounded-none bg-[#161716] font-bold text-white">
      Note Deleted
    </Alert>
  );
};

export const NoteEdited = () => {
  return (
    <Alert className="drop-shadow-lg flex justify-center absolute top-10 right-10 w-48 rounded-none bg-[#161716] font-bold text-white">
      Note Edited
    </Alert>
  );
};
