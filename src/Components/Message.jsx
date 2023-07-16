import React from "react";
import { Alert } from "@material-tailwind/react";

export const NoteAdded = () => {
  return (
    <div>
      <Alert
        color="green"
        className="md:w-72 absolute top-5 left-2 md:left-auto md:top-10  md:right-10 z-10"
      >
        Note Added Successfully
      </Alert>
    </div>
  );
};

export const NoteDeleted = () => {
  return (
    <div>
      <Alert
        color="red"
        className="md:w-72 absolute top-5 left-2 md:left-auto md:top-10  md:right-10 z-10"
      >
        Note Deleted Successfully
      </Alert>
    </div>
  );
};

export const NoteEdited = () => {
  return (
    <Alert
      color="yellow"
      className="md:w-72 absolute top-5 left-2 md:left-auto md:top-10  md:right-10 z-10"
    >
      Note Edited Successfully
    </Alert>
  );
};
