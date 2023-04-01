export const AddTodo = (title, description) => {
  return {
    type: "ADD_TODO",
    title: title,
    description: description,
  };
};

export const DeleteTodo = (title) => {
  return {
    type: "DELETE_TODO",
    title: title,
  };
};

export const EditTodo = (title, description) => {
  return {
    type: "EDIT_TODO",
    title: title,
    description: description,
  };
};
