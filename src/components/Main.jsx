import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Men from './Men';
import Women from './Women';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    fontSize: '35px'
  },
  tableProp: {
    margin: '100px auto 0',
    width: '90%',
  },
  imgProp: {
    width: '100px',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(2)'
    }
  }
})

const Data = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TableContainer component={Paper} className={classes.tableProp}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell align='center' className={classes.root}><b>Sr.No.</b></TableCell>
              <TableCell align='center' className={classes.root}><b>Image</b></TableCell>
              <TableCell align='center' className={classes.root}><b>Name</b></TableCell>
              <TableCell align='center' className={classes.root}><b>Price</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {(location.pathname === '/men') ? <Men /> :
              (location.pathname === '/women') ? <Women /> : null}

          </TableBody>

        </Table>
      </TableContainer>
    </>
  )
}

export default Data;
