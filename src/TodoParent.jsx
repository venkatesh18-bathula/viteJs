import React from 'react'
import { createContext,useState } from 'react';
import ChildTodo from './components/ChildTodo';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
export const TodoContext=createContext();


const TodoParent = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Complete project documentation",
            description: "Finalize and submit the project documentation to the team",
            isCompleted: false
        },
        {
            id: 2,
            title: "Weekly meeting with client",
            description: "Discuss project milestones and next deliverables",
            isCompleted: true
        },
        {
            id: 3,
            title: "Code review session",
            description: "Review pull requests and provide feedback",
            isCompleted: false
        },
        {
            id: 4,
            title: "Update team on progress",
            description: "Send a status update email to the team by EOD",
            isCompleted: true
        },
        {
            id: 5,
            title: "Test new features",
            description: "Test the newly implemented features before deployment",
            isCompleted: false
        }
    ]);
    const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);
    const[isEditTodoVisible,setIsEditTodoVisible]=useState(false)

    const confirmDelete=(id)=>{
    const filteredProducts=todos.filter(todo=>todo.id !== id);
    setTodos(filteredProducts);
    }
    const insertTodo=(data)=>{
        setTodos([...todos,{...data,isCompleted:false,id:todos.length+1}])
        console.log(data)
        console.log(data.id)
        setIsAddTodoVisible(false);
    }
    const editTodo=(id)=>{

    }
  return (
    <>
    <div className='flex gap-12 mb-4'>
    <button className='bg-blue-500 text-white px-4 py-2 mt-4' onClick={()=>setIsAddTodoVisible(true)}>Addtodo</button>


    </div>

    <div className='flex flex-wrap gap-3 justify-around justify-start'>
    <TodoContext.Provider value={{confirmDelete,setIsAddTodoVisible,insertTodo,setIsEditTodoVisible}}>
        {todos.map(todo=>(
            <div key={todo.id}>
            <ChildTodo todo={todo}/>

            </div>

        ))}
                            {isAddTodoVisible && <AddTodo/>}

     </TodoContext.Provider>
    </div>
      
    </>
  )
}

export default TodoParent