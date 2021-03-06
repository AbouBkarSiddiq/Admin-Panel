import React from 'react';
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

export default function CategoryForm() {
    const classes = useStyles();

    return (
        <div className="md:py-12 sm:py-12 py-24 min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-indigo-600">Categories</h1>
                    <form className="w-full py-8">
                        <div className="floating-input mb-5 relative">
                            <TextField className="w-full border-gray-400" id="outlined-basic" label='Name' variant="outlined" />
                        </div>
                        <div className="floating-input relative">
                            <input type="file" id="img" name="img" accept="image/*" multiple className="w-full bg-indigo-600 text-white p-3 rounded-md" />
                        </div>
                        <div className="py-4 flex justify-end">
                            <button className="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}