import React from 'react'
import products from '../../data/products';
import categories from '../../data/categories';

export default function ProductsEditFormCard(props) {

    return (
        <div className="py-24  sm:py-28 md:bg-gray-100 sm:bg-gray-100 flex flex-col justify-center items-center">
            <div className="md:px-12 sm:px-20  relative py-3 md:max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-blue-600">{props.name}</h1>
                    <form className="py-8 w-full">
                        <label className=" block mt-6">
                            <div className="">Select Categories:</div>
                            <select className="p-4 border border-gray-400 focus:outline-none rounded-md mt-1 block w-full">
                                <option>
                                    {props.categoryName}
                                </option>
                                {
                                    categories.filter((category) => (props.categoryName !== category.name)).map(category => (
                                        <option>{category.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <div className="mt-10">
                            <input className="shadow p-3 rounded-md w-full h-14 border focus:outline-none border-gray-200" defaultValue={props.name} />
                        </div>
                        <div className=" mt-8 relative">
                            <textarea rows={6} defaultValue={props.description}
                                className="shadow p-3 rounded-md w-full h-72 border focus:outline-none border-gray-200"
                            />
                        </div>
                        <div className="mt-6 relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-blue-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="py-8 flex justify-end">
                            <button className="shadow px-8 bg-blue-600 text-white p-3 rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}