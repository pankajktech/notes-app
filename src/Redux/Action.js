export const AddTodo = (title, description) => {
  return {
    type: "ADD_TODO",
    title: title,
    description: description,
  };
};

// export const DeleteTodo = () => {
//   return {
//     type: "DELETE_TODO",
//     payload: todo,
//   };
// };
