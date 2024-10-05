import React from 'react'
import {useState,useReducer} from "react";
import reducer from './reducer'

// function reducer(state,action){
//     // console.log(action);
//     switch(action.type){
//         case'increment':{
//             return {value:state.value+1}
//         }
//         case'decrement':{
//             return {value:state.value-1}
//         }
//         case'reset':{
//             return {value:0}
//         }
//     }
//     return state;
    

// }

const UseReducer = () => {
    // const [counter,setCounter]=useState(0);
    // const increment=()=>{
    //     setCounter(counter+1);
    // }
    // const decrement=()=>{
    //     setCounter(counter-1);
    // }
    // const reset=()=>{
    //     setCounter(0);
    // }
    const [state,dispatch]=useReducer(reducer,{value:0})
  return (
    <>
<h1>counter:{state.value}</h1>
<button onClick={()=>dispatch({type:'increment'})}>increment</button>
<button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
<button onClick={()=>dispatch({type:'reset'})}>reset</button>

    </>
  )
}

export default UseReducer