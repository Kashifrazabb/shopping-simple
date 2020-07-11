import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const History = ({ data, count }) => {
    return (
        <Grid container justify='center' alignItems='center' style={{ height: '100vh' }}>
            <Grid item xs={6} style={{ background: 'white', minHeight: '50vh' }}>
                {count ? <Typography variant='h4' align='center'
                    style={{ background: 'crimson', color: 'white',padding:'20px 0' }}>Y O U R &nbsp; C A R T S
                </Typography> : null}
                <List>
                    {count ? data.filter(i => i.name !== '').map(i =>
                        <ListItem>
                            <ListItemText style={{ color: 'dodgerblue' }}>
                                <Typography variant='h6'>Order Id : {i.id}</Typography>
                                <b>{i.name}</b> has been added here which is of <b>{i.price}</b></ListItemText>
                        </ListItem>
                    ) : <Typography variant='h4' align='center' style={{ lineHeight: '441px', color: 'gray' }}>Empty Cart</Typography>}
                </List>
            </Grid>
        </Grid>
    )
}

export default History;
