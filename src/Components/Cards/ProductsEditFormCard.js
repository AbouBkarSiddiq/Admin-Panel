import React from 'react'
import products from '../../data/products';
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

export default function ProductsEditFormCard(props) {
    const classes = useStyles();
    return (
        <div class="md:py-12 sm:py-12 py-24 md:bg-gray-100 sm:bg-gray-100 py-8 flex flex-col justify-center items-center">
            <div class="md:px-20 sm:px-20  relative py-3 md:max-w-xl sm:mx-auto">
                <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <h1 className="text-center text-2xl text-indigo-600">{props.name}</h1>
                    <form className="py-8 w-full">
                        <TextField className="w-full border-gray-400" id="outlined-basic" label={props.name} variant="outlined" />
                        <div class=" mt-8 relative">
                            <textarea rows="6" cols="50" className="border h-full border border-gray-400 placeholder-black focus:outline-none rounded-md focus:shadow-sm w-full p-3" placeholder={props.description} autocomplete="off"></textarea>
                        </div>
                        <div className="py-8 flex justify-end">
                            <button class="px-8 bg-indigo-600 text-white p-3 rounded-md">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        //   return (
        //     <form className={classes.root} noValidate autoComplete="off">
        //       <TextField id="standard-basic" label="Standard" />
        //       <TextField id="filled-basic" label="Filled" variant="filled" />
        //       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        //     </form>
        //   );
        // }

    )
}