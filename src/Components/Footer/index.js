// import React from 'react';
// import { FaEnvelope, FaFacebook } from "react-icons/fa";


// export default function Footer() {
//     return (
//         <div className="text-white bg-blue-600 w-full">
//             <footer className="pt-12 md:pt-12 md:pb-12 pb-6">
//                 <div className=" mx-auto">
//                     <div className="flex flex-wrap md:flex-nowrap lg:px-32">
//                         <div className="w-full lg:w-6/12 ">
//                             <h4 className="ml-8  text-3xl font-semibold">
//                                 Let's keep in touch!
//                             </h4>
//                             <h5 className="ml-8 mt-2 text-sm md:text-base" >
//                                 <p>The information is also part of the MF Rural, </p>
//                                 <p>where you can find news, quotes, technological</p>
//                                 <p>information and others, in addition.</p>
//                             </h5>
//                             <div className="ml-8 mt-6">
//                                 <button 
//                                     className="bg-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
//                                     <a target="_blank" href="mailto:info@agroshalimar.com">
//                                         <FaEnvelope />
//                                     </a>
//                                 </button>
//                                 <button 
//                                     className="bg-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
//                                     <a target="_blank" href="https://www.facebook.com/saec.ryk">
//                                         <FaFacebook />
//                                     </a>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="mt-6 xl:mt-0 lg:mt-0 xl:ml-0 lg:ml-0 w-full lg:w-6/12 px-4">
//                             <div className="flex flex-row  items-top mb-6">
//                                 <div className=" w-full lg:w-4/12 px-4 ml-auto" >
//                                     <span className="block uppercase text-sm font-semibold mb-2">
//                                         Useful Links
//                                     </span>
//                                     <ul className="">
//                                         <li>
//                                             <a className="hover:underline font-semibold block pb-2 text-sm"
//                                                 href="">Category
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="hover:underline font-semibold block pb-2 text-sm"
//                                                 href="">Products
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className=" xl:ml-0 lg:ml-0 w-full lg:w-4/12" >
//                                     <span className="block uppercase text-sm font-semibold mb-2">
//                                         Other Resources
//                                     </span>
//                                     <ul className="list-unstyled">
//                                         <li>
//                                             <a className="hover:underline font-semibold block pb-2 text-sm"
//                                                 href="">MIT License
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="hover:underline font-semibold block pb-2 text-sm"
//                                                 href="">Terms & Conditions
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="hover:underline font-semibold block pb-2 text-sm"
//                                                 href="">Privacy Policy
//                                             </a>
//                                         </li>
//                                     </ul>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-8 lg:mt-16 flex flex-wrap items-center md:justify-between justify-center">
//                         <div className="w-full px-4 mx-auto text-center">
//                             <div className="text-sm md:text-lg font-semibold" >
//                                 Copyright © {new Date().getFullYear()}{" "}North Bridge Software{" "} Company
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }













import React from 'react';
import { FaEnvelope, FaFacebook, FaPlus } from "react-icons/fa";
import Harrow from '../../assets/Harrow.jpg'

export default function Footer() {
    return (
        <div class="ml-64 text-left relative inline-block ">
          <div>
            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
              Options
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        
          <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="py-1" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
              <form method="POST" action="#" role="none">
                <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
    )
}