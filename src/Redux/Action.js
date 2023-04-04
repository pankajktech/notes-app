export const AddNOTE = (title, description) => {
  return {
    type: "ADD_NOTE",
    title: title,
    description: description,
  };
};

export const DeleteNOTE = (id) => {
  return {
    type: "DELETE_NOTE",
    id: id,
  };
};

export const EditNOTE = (id, title, description) => {
  return {
    type: "EDIT_NOTE",
    id: id,
    title: title,
    description: description,
  };
};
