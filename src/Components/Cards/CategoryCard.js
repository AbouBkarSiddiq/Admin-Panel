import React from 'react'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

export default function CategoryCard({ name, image }) {

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
            <div className="bg-blue-600 items-center flex justify-between">
                <div className=" py-2 px-2 text-white">
                    <h3 className="shadow text-xl">{name}</h3>
                </div>
                <div className="">
                    <IconButton className="focus:outline-none"
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{color: "white"}}
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
                        <Link to={{
                            pathname: `/category/${name}`,
                            state: { product: { name, image } }
                        }}>
                            <MenuItem key={0} onClick={handleClose}>
                                Edit
                        </MenuItem>
                        </Link>
                        <Link>
                            <MenuItem key={1} onClick={handleClose}>
                                Delete
                        </MenuItem>
                        </Link>
                    </Menu>
                </div>
            </div>
            <Link to={`/categories/${name}`} className=" border block relative h-64 rounded overflow-hidden">
                <img alt="img" className="transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 object-contain object-center w-full h-full block" src={image} />
            </Link>
        </div>
    )
}