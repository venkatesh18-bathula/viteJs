import React from "react";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { useContext } from "react";
import { TodoContext } from "../TodoParent";

const ChildTodo = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { todo } = props;
  const[isEditTodoVisible,setIsEditTodoVisible]=useState(false);
  return (
    <>
      <div className="bg-white shadow-md rounded-lg  mb-4 w-full max-w-md ">
        <div className="bg-gray-300 p-3 text-center rounded-lg">
          <h3 className="text-xl font-semibold ">{todo.title}</h3>
        </div>
        <div className="p-3">
          <p className="text-gray-600 mt-2 ">{todo.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <p>{todo.isCompleted ? 'Completed' : 'In Complete'}</p>
            {/* {<EditTodo/>} */}
            <button className="bg-gray-300 rounded-lg px-3 py-1" onClick={()=>setIsEditTodoVisible(true)}>edit todo</button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full ml-4"
              onClick={() => setIsShowModal(true)}
            >
              Delete
            </button>
          </div>
        </div>

        {/* {isShowModal && <DeleteTodo setIsShowModal={setIsShowModal} todoId={todo.id}/>} */}
        {isShowModal && (
          <DeleteTodo setIsShowModal={setIsShowModal} todoId={todo.id} />
        )}
                                    {isEditTodoVisible && <EditTodo setIsEditTodoVisible={setIsEditTodoVisible} todoId={todo.id}/>}

      </div>
    </>
  );
};

export default ChildTodo;
