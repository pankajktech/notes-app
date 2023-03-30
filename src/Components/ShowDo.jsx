import React from "react";
import { useSelector } from "react-redux";

const ShowDo = () => {
  const todos = useSelector((state) => state.notes);

  return (
    <div className="flex flex-col ">
      {todos.map((todo, index) => (
        <div key={index} className="flex flex-col my-5 mx-auto">
          <h1 className="text-xl">{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowDo;
