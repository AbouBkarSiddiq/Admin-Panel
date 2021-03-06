import React from 'react'
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const options = [
    <Link to='/ProductsEditForm'>Edit</Link>,
    <Link>Delete</Link>
];

const ITEM_HEIGHT = 48;

export default function ProductsCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="bg-gray- space-x-2 space-y-2 flex flex-col shadow hover:shadow-2xl lg:w-1/3 xl:w-1/4 sm:w-1/2 md:w-1/2 p-4 w-full" style={{ border: "", fontFamily: "Ubuntu" }}>
            <div className="bg-blue-600  items-center flex justify-between">
                <div className=" py-2 px-2 text-white">
                    <h3 className="shadow text-xl">{props.product.name}</h3>
                </div>
                <div className="">
                    <IconButton className="focus:outline-none"
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
            <div className=" border block relative h-64 rounded overflow-hidden">
                <img alt="img" className="transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 object-contain object-center w-full h-full block" src={props.product.image} />
            </div>
        </div>
    )
}