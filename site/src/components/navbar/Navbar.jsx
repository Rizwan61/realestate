import React from 'react'
import '../navbar/Navbar.css';
import logo from '../../assets/images/logo.png'
function Navbar() {
  return (
    <>
     <div className=" ">
     <nav className=" p-4">
        <div className=" flex justify-between items-center">
         
        <img src={logo} alt="" />

         
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Properties</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
            <a href="#" className="text-white hover:text-gray-300">Add Property</a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Login
    </button>
          </div>
        </div>
      </nav>
     </div>
    </>
  )
}

export default Navbar