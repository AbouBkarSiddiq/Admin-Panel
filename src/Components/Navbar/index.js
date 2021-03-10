import React from 'react';
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

function NavBar() {
    return (
        <header className="bg-blue-600 body-font">
            <div className="container mx-auto flex flex-wrap sm:wrap p-5 flex-col sm:flex-row md:flex-row items-center">
                <a className="text-white flex title-font font-medium items-center mb-4 sm:mb-0 md:mb-0">
                    <span className="ml-3 text-xl">Agro Shalimar Admin Panel</span>
                </a>
                <nav className="text-white md:ml-auto sm:ml-auto flex flex-wrap sm:flex-wrap items-center text-base justify-center">
                    <Link to="/category" className="mr-5 text-base">Product Portfolio</Link>
                </nav>
                <div className=" border-0 focus:outline-none rounded text-base mt-4 sm:mt-0 md:mt-0">
                    <div className="flex h-12 items-center justify-center">
                        <div className="relative inline-block text-left">
                            <Menu>
                                {({ open }) => (
                                    <>
                                        <span className="rounded-md shadow-sm">
                                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 rounded-md focus:outline-none  ">
                                                <button className="focus:outline-none text-white px-4 rounded">
                                                    <a className="text-2xl">
                                                        <FaPlusSquare />
                                                    </a>
                                                </button>
                                            </Menu.Button>
                                        </span>

                                        <Transition
                                            show={open}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="text-center focus:outline-none absolute md:right-0 sm:right-0 w-32 origin-top-right bg-blue-600 text-white divide-y rounded-md shadow-lg outline-none"
                                            >

                                                <div className="shadow py-1 border">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/catForm"
                                                                className={`${active
                                                                    ? " text-black-400"
                                                                    : "text-black-600"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                                                            >
                                                                Category
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>

                                                <div className="shadow py-1 border ">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/ProductsForm"
                                                                className={`${active
                                                                    ? " text-black-400"
                                                                    : "text-black-600"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                                                            >
                                                                Products
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>

                                                <div className="shadow py-1 border ">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link to="/"
                                                                className={`${active
                                                                    ? " text-black-400"
                                                                    : "text-black-600"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                                                            >
                                                                Logout
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;