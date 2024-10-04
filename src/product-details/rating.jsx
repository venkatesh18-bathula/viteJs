import React from 'react'
import { Outlet } from 'react-router-dom'

function Rating() {
  return (
    <>
    <div>
    <h1 className='text-center mt-5 text-xl font-medium'>Rating</h1>

    </div>
    <Outlet/>
    </>
    
  )
}

export default Rating