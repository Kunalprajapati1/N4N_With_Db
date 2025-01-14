import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer2 = () => {
  return (
    <>
        

<footer className="bg-[black] mt-[100px] dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200">© 2024 
          <NavLink to="/" className="hover:underline">Need4Need™</NavLink>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer2