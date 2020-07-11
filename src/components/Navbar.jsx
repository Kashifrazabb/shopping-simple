import React from 'react'
import { AppBar, IconButton, Typography, Toolbar, MenuList, MenuItem, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles({
    badge: { top: 10 }
})(Badge);


const Navbar = ({ count }) =>
    <AppBar position="fixed" color='default'>
        <Toolbar>
            <Typography variant="h6">Shopping Arena</Typography>
            <NavLink to='/history'>
                <StyledBadge badgeContent={count} color="secondary">
                    <IconButton color="secondary">
                        <AddShoppingCartIcon />
                    </IconButton>
                </StyledBadge>
            </NavLink>
            <MenuList style={{ display: 'flex', marginLeft: 'auto' }}>
                <NavLink to='/home' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active'><MenuItem>H O M E</MenuItem></NavLink>
                <NavLink to='/men' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active'><MenuItem>M E N</MenuItem></NavLink>
                <NavLink to='/women' style={{ color: 'black', textDecoration: 'none' }} activeClassName='active' ><MenuItem>W O M E N</MenuItem></NavLink>
            </MenuList>
        </Toolbar>
    </AppBar>

export default Navbar;
