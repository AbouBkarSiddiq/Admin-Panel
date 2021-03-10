import React from 'react';



export default function ProductsForm() {

    return (
        <div className="bg-gray-200 sm:py-28 py-24 flex flex-col justify-center items-center">
            <div className="md:px-20 sm:px-20  relative py-3 md:w-11/12 md:max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-blue-600">Products</h1>
                    <form className="py-8 w-full">
                        <label className="block mt-6">
                            <div className="">Select Categories:</div>
                            <select className="shadow border border-gray-400 focus:outline-none h-12 rounded-md mt-1 block w-full">
                                <option>Crop Protection</option>
                                <option>Harvesting</option>
                                <option>Haulage</option>
                                <option>Land Scaping</option>
                                <option>Lift Operations</option>
                                <option>Loader</option>
                                <option>Postharvesting</option>
                                <option>Seeding</option>
                                <option>Tillage</option>
                            </select>
                        </label>
                        <div className="mt-6 ">
                            <input className="shadow p-3 rounded-md w-full h-14 border focus:outline-none border-gray-200" placeholder='Name' />
                        </div>
                        <div className="mt-8 border border-gray-200 ">
                            <textarea rows={6} rowsMax={50} className="shadow rounded-md p-3 focus:outline-none w-full " placeholder='Description'
                            />
                        </div>
                        <div className="rounded-md mt-6">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-blue-600 text-white p-3 rounded-md" />
                        </div>
                        <div className=" py-8 flex justify-end">
                            <button className="shadow px-8 bg-blue-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}