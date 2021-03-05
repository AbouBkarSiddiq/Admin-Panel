////////// Category Form ///////////

// import React from 'react'

// export default function Category() {
//     return (
// <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
//     <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
//         <div className=" relative p-8 bg-white shadow-sm sm:rounded-xl">
//             <h1 className="text-center text-2xl text-indigo-600">Categories</h1>
//             <form className="w-full py-8">
//                 <div className="floating-input mb-5 relative">
//                     <input type="name" id="name" className="border border-gray-400 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16" placeholder="name" autocomplete="off" />
//                     <label htmlFor="name" className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Name</label>
//                 </div>
//                 <div className="floating-input relative">
//                     <input type="file" id="img" name="img" accept="image/*" multiple className="w-full bg-indigo-600 text-white p-3 rounded-md" />
//                 </div>
//                 <div className="py-4 flex justify-end">
//                     <button className="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>
//     )
// }



















import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    addCategory
} from '../../Redux/Actions/Category'
const Category = () => {
    const [name, setName] = useState("");
    const [uploadImg, setUploadImg] = useState("");
    const dispatch = useDispatch();
    const storeUser = (e) => {
        e.preventDefault();
        dispatch({
            type: addCategory,
            payload: { name, uploadImg }
        });
    };

    return (

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-indigo-600">Categories</h1>
                    <form onSubmit={storeUser} className="w-full py-8">
                        <div className="floating-input mb-5 relative">
                            <input
                                type="name"
                                id="name"
                                className="border border-gray-400 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                                placeholder="name"
                                autocomplete="off"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name" className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Name</label>
                        </div>
                        <div className="floating-input relative">
                            <input
                                type="file"
                                id="img" name="img"
                                accept="image/*" multiple
                                className="w-full bg-indigo-600 text-white p-3 rounded-md"
                                onChange={(e) => setUploadImg(e.target.value)}
                            />
                        </div>
                        <div className="py-4 flex justify-end">
                            <button type="submit" className="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Category;