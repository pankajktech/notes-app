import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteTodo, EditTodo } from "../Redux/Action";

import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const ShowDo = () => {
  const todos = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EditNote = () => {
    dispatch(EditTodo());
    navigate("/");
  };

  return (
    <div className="bg-slate-900 min-h-screen p-10">
      <button
        onClick={() => navigate("/")}
        className="btn btn-outline btn-accent flex p-2 justify-center items-center mx-auto my-5"
      >
        <AiOutlineArrowLeft className="mr-2 " />
        Go To Add Note
      </button>

      <h1 className="text-3xl text-white text-center my-5">
        {todos.length === 0 && (
          <span className="text-red-500 font-mono">No Notes Found</span>
        )}
        {todos.length > 0 && <span className=" font-mono">Your Notes</span>}
      </h1>

      <div className="flex flex-wrap">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between min-h-[200px] w-[500px] bg-slate-800 text-white p-5 m-5 shadow-sm shadow-slate-100 rounded-md"
          >
            <div>
              <h1 className="text-2xl text-teal-400 font-semibold">
                {todo.title}
              </h1>
              <p className="text-md mt-2 ">{todo.description}</p>
            </div>

            <div className="flex flex-col items-center justify-center border-l ml-3">
              <button onClick={EditNote}>
                <FaEdit className="text-2xl ml-4 my-4 hover:text-teal-500" />
              </button>

              <button onClick={() => dispatch(DeleteTodo(index))}>
                <AiFillDelete className="text-2xl ml-4 my-4 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDo;
