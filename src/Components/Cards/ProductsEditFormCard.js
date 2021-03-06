import React from 'react'
export default function ProductsEditFormCard(props) {
    return (
        <div class="sm:py-32 min-h-screen bg-gray-100 py-32 flex flex-col justify-center items-center">
            <div class="md:px-20 sm:px-20  relative py-3 md:w-11/12 md:max-w-xl sm:mx-auto">
                <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-indigo-600">Products</h1>
                    <form className="py-8 w-full">
                        <label className=" block mt-2">
                            <div className="">Select Categories:</div>
                            <select className="border border-gray-400 focus:outline-none h-12 rounded-md mt-1 block w-full">
                                <option>{props.product.name}</option>
                            </select>
                        </label>
                        <div className="mt-8 floating-input mb-5 relative">
                            <input type="name" id="name" className="border border-gray-400 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16" placeholder="name" autocomplete="off" />
                            <label htmlFor="name" className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">{props.product.name}</label>
                        </div>
                        <div class=" mb-5 relative">
                            <textarea rows="6" cols="50" className="h-full border border-gray-400 placeholder-black focus:outline-none rounded-md focus:shadow-sm w-full p-3" placeholder={props.product.description} autocomplete="off"></textarea>
                        </div>
                        <div className="py-8 flex justify-end">
                            <button class="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}