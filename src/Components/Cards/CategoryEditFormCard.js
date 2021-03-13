import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCategory } from "../../Redux/Actions/category";

export default function CategoryEditFormCard(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [image, setImage] = useState(false);

    useEffect(() => {
        setName(props.name);
    }, []);

    const handleOnPressUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", props.id);
        formData.append("name", name);
        if(image) {
            formData.append("image", image);
        }
        dispatch(editCategory(formData));
    }

    return (
        <div className=" bg-gray-100 ">
            <div className="py-24 sm:py-28 flex flex-col justify-center items-center">
                <div className="relative  md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                    <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                        <h1 className="text-center text-2xl text-blue-600">{name}</h1>
                        <form className="w-full py-8" onSubmit={handleOnPressUpdate}>
                            <div className="">
                                <input
                                    className="shadow p-3 rounded-md w-full h-14 border focus:outline-none border-gray-200" defaultValue={name} label='Product Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mt-8 relative">
                                <input
                                    type="file" id="img" name="img" accept="image/*" multiple className="py-4 p-3 w-full bg-blue-600 text-white  rounded-md"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="py-4 flex justify-end">
                                <button className="shadow px-8 bg-blue-600 text-white p-3 rounded-md">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}