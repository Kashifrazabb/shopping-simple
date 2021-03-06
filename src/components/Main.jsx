import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Men from './Men';
import Women from './Women';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  thead: {
    fontSize: '35px',
    color:'crimson'
  },
  tableProp: {
    margin: '100px auto 0',
    width: '90%',
    overflow:'hidden'
  },
  imgProp: {
    width: '100px',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(2)'
    }
  }
})

const Main = ({handleClick}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <TableContainer component={Paper} className={classes.tableProp}>
        <Table>

          <TableHead id='thead'>
            <TableRow>
              <TableCell align='center' className={classes.thead}><b>Sr.No.</b></TableCell>
              <TableCell align='center' className={classes.thead}><b>Image</b></TableCell>
              <TableCell align='center' className={classes.thead}><b>Name</b></TableCell>
              <TableCell align='center' className={classes.thead}><b>Price</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {(location.pathname === '/men') ? <Men handleClick={handleClick}/> :
              (location.pathname === '/women') ? <Women handleClick={handleClick}/> : null}

          </TableBody>

        </Table>
      </TableContainer>
    </>
  )
}

export default Main;
