import React from 'react';
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";


function NavBar() {
    return (
        <div className="w-full bg-blue-600">
            <div className=" flex flex-col md:items-center md:justify-between md:flex-row  sm:flex-row">
                <div className="p-6 flex flex-col md:flex-row sm:flex-row items-center justify-between">
                    <Link className="md:text-lg sm:text-lg text-sm font-semibold uppercase  text-white focus:outline-none focus:shadow-outline">Agro Shalimar Admin Panel</Link>
                    <button className="md:hidden  focus:outline-none focus:shadow-outline" >
                    </button>
                </div>
                <nav className="flex-col pb-4 text-center md:pb-0 md:flex md:justify-end md:flex-row sm:flex sm:justify-end sm:flex-row">
                    <Link to="/" className="text-base px-4 py-1 mt-2 font-semibold bg-transparent md:mt-0 sm:mt-4 md:ml-4 sm:ml-4 focus:outline-none text-white focus:shadow-outline">Products Portfolio</Link>

                    <div className=" dropdown inline-block relative">
                        <button className="focus:outline-none text-white font-semibold py-2 px-4 md:mt-0 sm:mt-4 rounded">
                            <a className="text-lg">
                                <FaPlusSquare />
                            </a>
                        </button>
                        <ul className="text-base dropdown-menu absolute hidden text-white bg-blue-500 pt-2">
                            <Link to="/catForm" className=" border py-2 px-4 block " href="#">Categories</Link>
                            <Link to="/ProductsForm" className=" border py-2 px-4 block " href="#">Products</Link>
                            <Link className=" border py-2 px-4 block " href="#">Logout</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;