import React from 'react';
import categories from '../../data/categories';
import { Link } from 'react-router-dom'
export default function CategoryEditFormCard(props) {
    return (
        <div className="py-32 md:py-8 min-h-screen bg-gray-100 flex flex-col justify-center items-center sm:py-32">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-indigo-600">Category</h1>
                    <form className="w-full py-8">
                        <div className="floating-input mb-5 relative">
                            <input type="name" id="name" className="border border-gray-400 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16" placeholder="name" autocomplete="off" />
                            <label htmlFor="name" className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">{props.name}</label>
                        </div>
                        <div className="py-4 flex justify-end">
                            <button className="px-8 bg-indigo-600 text-white p-3 rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // <>
        //     {
        //         categories[props.product].filter((product) => (product.name === props.name)).map(product => (
        //             <Link to={{
        //                 pathname: `/${props.CategoryEditFormCard}`,
        //                 state: { product: props.product }
        //             }}>
        //                 <div className="py-32 md:py-8 min-h-screen bg-gray-100 flex flex-col justify-center items-center sm:py-32">
        //                     <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
        //                         <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
        //                             <h1 className="text-center text-2xl text-indigo-600">Categories</h1>
        //                             <form className="w-full py-8">
        //                                 <div className="floating-input mb-5 relative">
        //                                     <input type="name" id="name" className="border border-gray-400 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16" placeholder="name" autocomplete="off" />
        //                                     <label htmlFor="name" className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">{product.name}</label>
        //                                 </div>
        //                                 <div className="py-4 flex justify-end">
        //                                     <button className="px-8 bg-indigo-600 text-white p-3 rounded-md">Update</button>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </Link>
        //         ))
        //     }
        // </>
    )
}