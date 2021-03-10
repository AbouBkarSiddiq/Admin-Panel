
import React from 'react';

export default function CategoryForm() {

    return (
        <div className="py-24 sm:py-28 min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-indigo-600">Add Category</h1>
                    <form className="w-full py-8">
                        <div className=" mb-5 ">
                            <input type="text" className="shadow mt-4 w-full h-12 border border-gray-200 p-3  rounded-lg focus:outline-none" placeholder="Name" />
                        </div>
                        <div className="relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-blue-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="py-4 flex justify-end">
                            <button className="shadow px-8 bg-blue-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}