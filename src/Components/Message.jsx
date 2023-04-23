import React from "react";
import { Alert } from "@material-tailwind/react";

export const NoteAdded = () => {
  return (
    <div>
      <Alert color="green">Note has been Added Successfully</Alert>
    </div>
  );
};

export const NoteDeleted = () => {
  return (
    <div>
      <Alert color="red">Note has been Deleted Successfully</Alert>
    </div>
  );
};

export const NoteEdited = () => {
  return <Alert color="yellow">Note has been Edited Successfully</Alert>;
};
