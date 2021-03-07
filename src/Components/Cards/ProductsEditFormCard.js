import React from 'react'
import products from '../../data/products';
import categories from '../../data/categories'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function ProductsEditFormCard(props) {
    const classes = useStyles();

    return (
        <div class="md:py-12 sm:py-12 py-24 md:bg-gray-100 sm:bg-gray-100 flex flex-col justify-center items-center">
            <div class="md:px-12 sm:px-20  relative py-3 md:max-w-xl sm:mx-auto">
                <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-indigo-600">{props.name}</h1>
                    <form className="py-8 w-full">
                        <label className=" block mt-6">
                            <div className="">Select Categories:</div>
                            <select className="p-4 border border-gray-400 focus:outline-none rounded-md mt-1 block w-full">
                                <option>
                                    {props.categoryName}
                                </option>
                                {
                                    categories.filter((category) => ( props.categoryName !== category.name )).map(category => (
                                        <option>{category.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <div className="mt-10">
                            <TextField className="py-6 w-full border-gray-400" id="outlined-basic" defaultValue={props.name} label='Product Name' variant="outlined" />
                        </div>
                        <div class=" mt-8 relative">
                            <TextField multiline rows={6} rowsMax={50} id="outlined-basic" defaultValue={props.description} label='Description' variant="outlined"
                                className="py-6 w-full border-gray-400"
                            />
                        </div>
                        <div className="mt-6 relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-indigo-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="py-8 flex justify-end">
                            <button class="px-8 bg-indigo-600 text-white p-3 rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}