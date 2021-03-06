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













// import React from 'react';
// import { FaEnvelope, FaFacebook, FaPlus } from "react-icons/fa";
// import Harrow from '../../assets/Harrow.jpg'
// import useForm from 'react-hook-form';

// export default function Footer() {

//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => {
//     alert(JSON.stringify(data));
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input name="firstName" placeholder="bill" ref={register} />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input name="lastName" placeholder="luo" ref={register} />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input name="email" placeholder="bluebill1049@hotmail.com" type="email" ref={register} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }