import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const About = ({ IMGSRC,NAME,PRICE,handleCart,cartBnt }) => {
    const handleBack=()=>{
        history.goBack()
    }
const history=useHistory();
    return (
        <Grid container style={{ height: '100vh' }} justify='center' alignItems='center'>
            <Grid item container xs={10} md={8} lg={5} style={{border:'1px solid white'}}>
                <Grid item xs={5}>
                    <img src={IMGSRC} alt="" width='100%' height='100%' />
                </Grid>
                <Grid item xs={7} align='center' style={{padding:'10px',color:'white'}}>
                    <Typography variant='h4'>{NAME}</Typography>
                    <Typography variant='h6' style={{color:'dodgerblue'}}>{PRICE}</Typography>
                    <br/>
                    <Typography variant='h6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, autem.</Typography>
                    <br/><br/>
                    {cartBnt?<Button variant='contained' color='secondary' fullWidth onClick={handleCart}>Add TO CART</Button>:<Button fullWidth disabled style={{background:'gray',color:'white'}}>Added TO CART</Button>}
                    <br/><br/>
                    <Button color='primary' variant='outlined' onClick={handleBack}>GO BACK</Button>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About;
