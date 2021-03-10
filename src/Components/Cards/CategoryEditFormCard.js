import React from 'react';
import categories from '../../data/categories';
import { Link } from 'react-router-dom';

export default function CategoryEditFormCard(props) {

    return (
        <div className=" bg-gray-100 ">
            <div className="py-24 sm:py-28 flex flex-col justify-center items-center">
                <div className="relative  md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                    <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                        <h1 className="text-center text-2xl text-blue-600">{props.name}</h1>
                        <form className="w-full py-8">
                            <div className="">
                                <input className="shadow p-3 rounded-md w-full h-14 border focus:outline-none border-gray-200"  defaultValue={props.name} label='Product Name' />
                            </div>
                            <div className="mt-8 relative">
                                <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 p-3 w-full bg-blue-600 text-white  rounded-md" />
                            </div>
                            <div className="py-4 flex justify-end">
                                <button className="shadow px-8 bg-blue-600 text-white p-3 rounded-md">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}