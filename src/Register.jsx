import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {useEffect,useState} from 'react'

const Register = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""

  });

  const fetchData=async()=>{
    const response=await fetch('/data.json')
    const data1=await(response.json())
    console.log(data1);

  }
  useEffect(()=>{
    fetchData();

  },[])

  const fetchData2=async()=>{
    const response=await fetch('/data.json',{method:'POST',body:JSON.stringify(data)})
    const data2=await(response.json())
    console.log(data2);

  }
  useEffect(()=>{
    fetchData2();

  },[])

   const onSubmit=(data)=>{
   setData(data);
   console.log(data)
   }
   const {register,handleSubmit,watch,formState:{errors}}=useForm();
   const passwordValue=watch('password');
  return (
      <>
      <h1 className='text-center'>Register</h1>
      <div className='text-center items-center'>
      <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" {...register('firstname',{required:{value:true,message:"name is requried"}}) } ></input><br/>
        {errors.firstname && <span className='text-red-500'>{errors.firstname.message}</span>}<br/>
        <label>email</label>
        <input type="email" {...register('email',{required:{value:true,message:"email is requried"},pattern:{value: /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,message:"invalid email pattern"}})}></input><br/>
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}<br/>
        <label>phone</label>
        <input type="phone" 
        {...register('phone',{
          required:{value:true,message:"phone is requried"},
          minLength:{value:10,message:"min 10 requried"}
          })}></input><br/>
          {errors.phone && <span>{errors.phone.message}</span>}<br/>
        <label>Password</label>
        <input type="password" 
        {...register('password',{
          required:{value:true,message:"password is requried"}
          
        })}
        
        ></input><br/>
        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}<br/>
        <label>confirmPassword</label>
        <input type="password" {...register('confirmPassword',{required:{value:true,validate:(confirmPasswordValue)=>passwordValue === confirmPasswordValue || "password and confirm password must match"}})}></input><br/>
        {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
        <button type="submit">submit</button>
      </form>
      </div>

          
      </>
  )
}

export default Register