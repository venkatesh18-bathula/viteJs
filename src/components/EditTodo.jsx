import React from 'react'
import { useForm } from 'react-hook-form'
import { TodoContext } from '../TodoParent';
import { useContext,useState,useEffect } from 'react';

const EditTodo = (props) => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {setIsEditTodoVisible,todoId}=props;
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
    const [editData,setEditData]=useState();
    const editTodo=()=>{
        const filteredTodo=todos.filter(todo=>todo.id ===todoId);
        setEditData(filteredTodo)
    }
  useEffect(()=>{
      editTodo();
  },[])
    // console.log(editData)

    const onSubmit=(data)=>{
         console.log(data);
         setEditData(data);
    }

  return (
    <>
        
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add New Todo</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        // value={editData.title}
                        id="title"
                        name='title'
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Enter title"
                        {...register('title',{requried:{value:true,message:"tittle is requried"},minLength:{value:4,message:"min 4 characters"}})}
                    />
                    {errors.title && <span className='text-red-600'>{errors.title.message}</span>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        // value={editData.description}

                        name='description'
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Enter description"
                        {...register('description',{requried:{value:true,message:"description is required"}})}
                    ></textarea>
                    {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                      onClick={()=>setIsEditTodoVisible(false)}  
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                //    onClick={()=>setIsAddTodoVisible(false)}
                // onClick={()=>setIsEditTodoVisible(false)} 
                   >
                        Edit Todo
                    </button>
                </div>
            </form>
        </div>
    </div>


</>
  )
}

export default EditTodo