import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center justify-center sm:py-12">
            <div className="relative py-3 sm:px-20 md:px-20 w-11/12 max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-blue-500">Login</h1>
                    <form className="w-full">
                        <div className="mt-8">
                            <input type="text" className="shadow mt-4 w-full h-12 border border-gray-200 p-3  rounded-lg focus:outline-none" placeholder="User Name" />
                        </div>
                        <div className="">
                            <input type="Password" className="shadow mt-4 w-full h-12 border border-gray-200 p-3  rounded-lg focus:outline-none" placeholder="Password" />
                        </div>
                        <Link to="/category" className="focus:outline-none">
                            <button className="shadow mt-4 w-full bg-blue-600 text-white p-3 rounded-md">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
