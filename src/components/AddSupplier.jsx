import React from 'react'
import { useForm } from 'react-hook-form';
import { useState} from 'react';
import { useContext} from 'react';

import {MainContext} from '../pages/SupplierList'

const AddSupplier = () => {
    const {addSuppliers}=useContext(MainContext);
    const {register,handleSubmit}=useForm();
    const [counter,setCounter]=useState(0);
    const [data,setData]=useState({
        name: '', 
        contactEmail: '', 
        contactPhone: '', 
        address: { 
            street: '', 
            city: '', 
            zipCode: '' 
        }
    });

    const increment=()=>{
        setCounter(counter + 1);
       
    }
   
    
const handleForm=(data)=>{
    console.log(data)
    addSuppliers(data);
}

    return (
       
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold">Add Supplier</h2>
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                </div>
              
                     <div className="flex">
                     <button
                         className={`flex-1 py-2 text-center `}  //${state.config.activeTab === 0 ? 'bg-gray-200' : ''}
                         // onClick={() => dispatch({ type: 'UPDATE_TAB_INDEX', payload: 0 } )} 
                         onClick={()=>setCounter(0)}
                     >
                         Basic Info
                     </button>
                     <button
                         className={`flex-1 py-2 text-center `} // ${state.config.activeTab === 1 ? 'bg-gray-200' : ''}
                         // onClick={() => dispatch({ type: 'UPDATE_TAB_INDEX', payload: 1 } )}
                         onClick={()=>setCounter(1)}
                     >
                         Address
                     </button>
                     <button
                         className={`flex-1 py-2 text-center `} //${state.config.activeTab === 2 ? 'bg-gray-200' : ''}
                         // onClick={() => dispatch({ type: 'UPDATE_TAB_INDEX', payload: 2 } )}
                         onClick={()=>setCounter(2)}
                     >
                         Contact
                     </button>
                 </div>
                <form className="p-4" onSubmit={handleSubmit(handleForm)}>
                    { counter === 0 && (
                        <div>
                            <label className="block mb-2">Supplier Name</label>
                            <input
                                type="text"
                                name="name"
                                className="border rounded p-2 w-full mb-4"
                                {...register('name')}
                            />
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="border rounded p-2 w-full mb-4"
                                {...register('contactEmail')}                                
                            />
                            <label className="block mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                className="border rounded p-2 w-full mb-4"
                                {...register('contactPhone')}
                            
                            />
                        </div>
                    )}
                    {counter === 1 && (
                        <div>
                            <label className="block mb-2">Street</label>
                            <input
                                type="text"
                                name="street"
                                className="border rounded p-2 w-full mb-4"
                                {...register('address.street')}
                            />
                            <label className="block mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                className="border rounded p-2 w-full mb-4"
                                {...register('address.city')}
                            />
                            <label className="block mb-2">ZIP Code</label>
                            <input
                                type="text"
                                name="zip"
                                className="border rounded p-2 w-full mb-4"
                                {...register('address.zipCode')}
                            />
                        </div>
                    )}
                    {counter === 2 && (
                        <div>
                            <label className="block mb-2">Contact Person</label>
                            <input
                                type="text"
                                name="contactPerson"
                                className="border rounded p-2 w-full mb-4"
                                {...register('contactPerson')}
                            />
                            <label className="block mb-2">Contact Number</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                className="border rounded p-2 w-full mb-4"
                                {...register('contactNumber')}
                            />
                             <label for="birthday">date:</label>
                             <input type="date"  name="joinedDate" className="border rounded p-2 w-full mb-4"   {...register('joinedDate')}
                             />
 

                        </div>
                    )}
                    <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2" >
                        Submit
                    </button>
                    <p onClick={()=>setCounter(-1)}>close</p>
                </form>
            </div>

        </div>
        
        
    )
    
}


export default AddSupplier