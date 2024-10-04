import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductDescription() {
  return (
     <>
         <div>
            
            <h1 className='text-center mt-5 text-xl font-medium'>product-description</h1>

         </div>
        <Outlet/>
     </>
 )
}

export default ProductDescription