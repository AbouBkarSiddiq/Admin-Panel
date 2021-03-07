import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function ProductsForm() {
const classes = useStyles();

    return (
        <div class="md:py-12 sm:py-12 py-24 bg-gray-100 flex flex-col justify-center items-center">
            <div class="md:px-20 sm:px-20  relative py-3 md:w-11/12 md:max-w-xl sm:mx-auto">
                <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-indigo-600">Products</h1>
                    <form className="py-8 w-full">
                    <label className=" block mt-6">
                            <div className="">Select Categories:</div>
                            <select className="border border-gray-400 focus:outline-none h-12 rounded-md mt-1 block w-full">
                                <option>Crop Protection</option>
                                <option>Harvesting</option>
                                <option>Haulage</option>
                                <option>Land Scaping</option>
                                <option>Lift Operations</option>
                                <option>Loader</option>
                                <option>Postharvesting</option>
                                <option>Seeding</option>
                                <option>Tillage</option>
                            </select>
                        </label>
                        <div className="floating-input mt-6 relative">
                            <TextField className="w-full border-gray-400" id="outlined-basic" label='Name' variant="outlined" />
                        </div>
                        <div class=" mt-6 relative">
                            <textarea rows="6" cols="50" className="h-full border border-gray-400 placeholder-black focus:outline-none rounded-md focus:shadow-sm w-full p-3" placeholder="Description" autocomplete="off"></textarea>
                        </div>
                        <div className="mt-6 relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="py-4 w-full bg-indigo-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="py-8 flex justify-end">
                            <button class="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}