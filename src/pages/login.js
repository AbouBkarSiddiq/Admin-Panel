
///// Login Form /////////

import React from 'react'

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center justify-center sm:py-12">
            <div className="relative py-3 sm:px-20 md:px-20 w-11/12 max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-blue-500">Login</h1>
                    <form className="py-8 w-full">
                        <div className="floating-input mb-5 relative">
                            <input type="name" id="name" className=" outline-none border-0 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name" autoComplete="off" />
                            <label htmlFor="name" className="text-blue-500 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">User Name</label>
                        </div>
                        <div className="floating-input mb-5 relative">
                            <input type="password" id="password" className=" outline-none border-0 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="password" autoComplete="off" />
                            <label htmlFor="password" className="text-blue-500 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Password</label>
                        </div>
                        <button className="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}









