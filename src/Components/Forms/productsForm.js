import React, { useEffect } from 'react';
// import categories from '../../data/categories'
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../Redux/Actions/category';
import {apiUrl} from '../../constants'


export default function ProductsForm() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div className="bg-gray-200 sm:py-28 py-24 flex flex-col justify-center items-center">
            <div className="md:px-20 sm:px-20  relative py-3 md:w-11/12 md:max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-blue-600">Add Product</h1>
                    <form className="py-8 w-full">
                        <label className="block mt-6">
                            <div className="">Select category:</div>
                            <select className="shadow border border-gray-400 focus:outline-none h-12 rounded-md mt-1 block w-full">
                                {
                                    categories.map((category) => (
                                        // <option></option>
                                        <option>{category.name}</option>
                                    ))
                                }
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
                            <label>Upload Product Image:</label>
                            <input type="file" id="img" name="img" accept="image/*" multiple className="mt-2 w-full bg-blue-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="rounded-md mt-6">
                            <label>Upload Table Image:</label>
                            <input type="file" id="img" name="img" accept="image/*" multiple className="mt-2 w-full bg-blue-600 text-white p-3 rounded-md"/>
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