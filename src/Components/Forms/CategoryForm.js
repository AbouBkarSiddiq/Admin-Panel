import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../Redux/Actions/category'
import CategoryCard from "../../Components/Cards/CategoryCard";
import {apiUrl} from '../../constants'


export default function CategoryForm() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const storeData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);
        dispatch(addCategory(formData));
    };

    // useEffect(() => {
    //     dispatch(addCategory())
    // }, [])


    return (
        <div className="py-24 sm:py-28 min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-indigo-600">Add Category</h1>
                    <form className="w-full py-8" onSubmit={storeData}>
                        <div className=" mb-5 ">
                            <input type="text" className="shadow mt-4 w-full h-12 border border-gray-200 p-3  rounded-lg focus:outline-none" placeholder="Name" 
                                 onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-blue-600 text-white p-3 rounded-md" 
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="py-4 flex justify-end">
                            <input type="submit" value="Add"  className="shadow px-8 bg-blue-600 text-white p-3 rounded-md" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}