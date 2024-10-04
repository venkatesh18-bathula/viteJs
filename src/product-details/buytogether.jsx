import React from 'react'
import { Outlet } from 'react-router-dom'

function BuyTogether() {
  return (
    <>
    <div>
    <h1 className='text-center mt-5 text-xl font-medium'>Buy Together</h1>

    </div>
<Outlet/>
    </>
  )
}

export default BuyTogether