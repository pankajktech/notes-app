export const AddTodo = (title, description) => {
  return {
    type: "ADD_TODO",
    title: title,
    description: description,
  };
};

export const DeleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

export const EditTodo = (id, title, description) => {
  return {
    type: "EDIT_TODO",
    id: id,
    title: title,
    description: description,
  };
};
