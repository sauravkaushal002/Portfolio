// import React from 'react'
// import { useState } from 'react'
// // import Projects from './Projects';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import {HashLink as Link} from "react-router-hash-link"
// function Header() {
// const [menu ,setMenu] =useState(false)
//   // const click =()=>{
//   //   setMenu(true)
//   //   console.log("clicked")
//   // }
//   return (
// <>
// <BrowserRouter>
// <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//   <div className="container flex flex-wrap justify-between items-center mx-auto">
//     <a href="https://flowbite.com/" className="flex items-center ml-8">
//         {/* <div className="mr-3 h-6 sm:h-9 text-5xl col font-extrabold text-orange-600" alt="logo">SK</div> */}
//     <span className="self-center text-xl text-black font-semibold font-style: italic ">SAURAV</span>
//     <span className="self-center text-xl font-bold	font-style:italic ml-1 text-green-600">KAUSHAL</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <span className="sr-only">Open main menu</span>
//       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//     <div className="w-full md:grid md:w-auto " >
//       <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//         <Link to="#homepage" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
//         </li>
//         <li>
//           <Link to="#about" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
//         </li>
//         <li>  
//           <Link to="#project" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
//         </li>
    
//         <li>
//           <Link to="#contact" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// <div className=' bg-zinc-800'>
// </div>
// </BrowserRouter>
// </>
//   )
// }

// export default Header
import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
      <>
      <BrowserRouter>
  <nav className="w-full bg-[#dddddbd1] shadow">
  <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
  <div>
<div className="flex items-center justify-between py-3 md:py-5 md:block">
    <a href="#">
    <span className="self-center text-xl text-black font-semibold font-style: italic ">SAURAV</span>
   <span className="self-center text-xl font-bold	font-style:italic ml-1 text-green-600">KAUSHAL</span>
    </a>
    <div className="md:hidden">
        <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
        >
            {navbar ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                            strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
<Link to="#homepage" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
           <Link to="#about" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
         </li>
         <li>  
           <Link to="#project" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
         </li>
         <li>
          <Link to="#connect" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Links</Link>
         </li>
    
    <li>
          <Link to="#contact" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
         </li>
       </ul>
            </div>
        </div>
    </div>
</nav>
    </BrowserRouter>
</>
);
}
