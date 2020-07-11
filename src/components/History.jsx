import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography, IconButton, Input,Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const History = ({ data, count, handleDelete, handleEdit, pop, handleEditDone, handleClear,onEdit, edit }) => {
    return (
        <Grid container justify='center' alignItems='center' style={{ height: '100vh' }}>
            <Grid item xs={6} style={{ background: 'white', height: '60vh', overflow: 'auto' }}>
                {count ? <Typography variant='h4' align='center'
                    style={{ background: 'crimson', color: 'white', padding: '20px 0' }}>Y O U R &nbsp; C A R T S
                </Typography> : null}
                <List>
                    {count ? data.filter(i => i.name !== '').map(i => 
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton style={{ width: '50px', height: '50px' }} onClick={() => handleDelete(i.id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton style={{ width: '50px', height: '50px' }} onClick={() => handleEdit(i.id)}>
                                <EditIcon />
                            </IconButton>
                            {pop ? <><input type='text' placeholder='Edit Quantity' onChange={onEdit} value={edit} style={{ width: '50px' }} />
                                <button onClick={() => handleEditDone(i.id)}>Done</button></> : null}
                            <ListItem>
                                <ListItemText style={{ color: 'dodgerblue' }}>
                                    <Typography variant='h6'>Order Id : {i.id}</Typography>
                                    <Typography variant='h6'>Quantity : {i.quantity}</Typography>
                                    <b>{i.name}</b> has been added here which is of <b>{i.price}</b></ListItemText>
                            </ListItem>
                        </div>
                    </>
                    ) : <Typography variant='h4' align='center'
                        style={{ lineHeight: '529.19px', color: 'gray' }}>Empty Cart</Typography>}
                    
                    {count>1?<Button onClick={handleClear} variant='contained' color='secondary'
                    style={{width:'200px',margin:'20px auto',display:'block'}}>Clear All</Button>:null}

                </List>
            </Grid>
        </Grid>
    )
}

export default History;
