import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductSpecifiation() {
  return (
    <>
    <div>
    <h1 className='text-center mt-5 text-xl font-medium'>Product Specifiation</h1>

    </div>
    <Outlet/>
    </>
    

  )
}

export default ProductSpecifiation