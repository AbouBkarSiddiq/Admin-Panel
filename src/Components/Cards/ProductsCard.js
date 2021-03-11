import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

export default function ProductsCard(props) {

    return (
        <div className="" style={{ border: "", fontFamily: "Ubuntu" }}>
            <div className="bg-blue-600  items-center flex justify-between">
                <div className=" py-2 px-2 text-white">
                    <h3 className="p-2 shadow text-lg">{props.product.name}</h3>
                </div>
                <div className="relative inline-block">
                    <Menu>
                        {({ open }) => (
                            <>
                                <div className="rounded-md shadow-sm">
                                    <Menu.Button className="inline-flex justify-end w-full py-2 rounded-md focus:outline-none  ">
                                        <button className="-mt-2 focus:outline-none bg text-white px-4 rounded">
                                            <a className="text-2xl">
                                                <FaEllipsisV />
                                            </a>
                                        </button>
                                    </Menu.Button>
                                </div>

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
                                        className="shadow absolute z-10 md:right-0 top-0 origin-top-right sm:right-0 w-32 bg-white rounded-md focus:outline-none"
                                    >
                                        <div className="shadow py-1 border focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link className="text-black" to={{
                                                        pathname: `/categories/${props.categoryName}/${props.product.name}`,
                                                        state: { product: props.product, categoryName: props.categoryName }
                                                    }}
                                                        className={`${active
                                                            ? " text-black-400"
                                                            : "text-black-600"
                                                            } text-base flex justify-between w-full px-4 py-2 leading-5 text-left focus:outline-none`}
                                                    >
                                                    <i><FaEdit /></i>
                                                        Edit
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>

                                        <div className="shadow py-1 border focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        className={`${active
                                                            ? " text-black-400"
                                                            : "text-black-600"
                                                            } flex justify-between w-full px-4 py-2 text-base leading-5 text-left focus:outline-none`}
                                                    >
                                                    <i><FaTrash /></i>
                                                        Delete
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
            <div className=" border block relative h-64 rounded overflow-hidden">
                <img alt="img" className="transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 object-contain object-center w-full h-full block" src={props.product.image} />
            </div>
        </div>
    )
}