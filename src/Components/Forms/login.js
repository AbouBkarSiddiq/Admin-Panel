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
export default function Login() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center justify-center sm:py-12">
            <div className="relative py-3 sm:px-20 md:px-20 w-11/12 max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-blue-500">Login</h1>
                    <form className="py-8 w-full">
                        <div>
                            <TextField className="mt-4 w-full border-gray-400" id="outlined-basic" label='User Name' variant="outlined" />
                        </div>
                        <div className="mt-4">
                            <TextField className="mt-4 w-full border-gray-400" id="outlined-basic" label='Password' variant="outlined" />
                        </div>
                        <div className="py-4 focus:outline-none">
                            <button className="w-full bg-indigo-600 text-white p-3 rounded-md">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
