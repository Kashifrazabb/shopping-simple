import React from 'react';
import Navbar from './Navbar';
import { Typography } from '@material-ui/core';

const Home = () => {
    return (
        <>
            <Navbar />
            <Typography variant='h1' align='center' style={{marginTop:'100px',color:'white'}}>W E L C O M E </Typography>
        </>
    )
}

export default Home;