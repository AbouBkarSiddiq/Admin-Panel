import React from 'react';
import categories from '../../data/categories';
import { Link } from 'react-router-dom'
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

export default function CategoryEditFormCard(props) {
    const classes = useStyles();

    return (
        <div className="md:py-12 sm:py-12 py-32 bg-gray-100 flex flex-col justify-center items-center">
            <div className="relative md:px-20 sm:px-20 py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className=" relative p-8 bg-white shadow-sm sm:rounded-md">
                    <h1 className="text-center text-2xl text-indigo-600">{props.name}</h1>
                    <form className="w-full py-8">
                        <div className="">
                            <TextField className="w-full border-gray-400" id="outlined-basic" label={props.name} variant="outlined" />
                        </div>
                        <div className="py-4 flex justify-end">
                            <button className="px-8 bg-indigo-600 text-white p-3 rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}