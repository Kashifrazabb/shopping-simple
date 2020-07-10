import React from 'react'
import { AppBar, IconButton, Typography, Toolbar, MenuList, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
    <AppBar position="fixed" color='default'>
        <Toolbar>
            <IconButton color="inherit"><MenuIcon /></IconButton>
            <Typography variant="h6">Shopping Arena</Typography>
            <MenuList style={{ display: 'flex', marginLeft: 'auto' }}>
                <NavLink to='/home' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active'><MenuItem>H O M E</MenuItem></NavLink>
                <NavLink to='/men' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active'><MenuItem>M E N</MenuItem></NavLink>
                <NavLink to='/women' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active' ><MenuItem>W O M E N</MenuItem></NavLink>
            </MenuList>
        </Toolbar>
    </AppBar>

export default Navbar;
