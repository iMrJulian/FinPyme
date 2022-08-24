import React, { useState } from 'react';
import { NavBar }from '../../components/NavBar';
import { ContainerBottons, WrapHome } from './styles';
import CalculateIcon from '@mui/icons-material/Calculate';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Outlet, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import axios from 'axios';

const URI = 'http://localhost:8000/earnings/';

export function Home (props){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();        
    
    const handleClick = (path) => {
        navigate(`/home/${path}`, { replace: true })
    }

    const handleClose = () => {
        
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <WrapHome>
            <div className="outlet">
                <NavBar>
                <IconButton  edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon onClick = {handleOpen} />
                    <Menu
                        id="menu-appbar"
                        //anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                       //onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Salir</MenuItem>
                    </Menu>
                </IconButton>
                    <div className = "nameFinPyme">
                        FinPyme
                    </div>
                </NavBar>
                <Outlet></Outlet>
            </div>
            <NavBar>
                <ContainerBottons onClick={() => handleClick('budget')}>
                    < CalculateIcon />
                    <p> Balance </p>
                </ContainerBottons>
                <ContainerBottons onClick={() => handleClick('inventary')}>
                    < InventoryIcon />
                    <p> Inventario </p>
                </ContainerBottons>
            </NavBar>
        </WrapHome>
    )
}