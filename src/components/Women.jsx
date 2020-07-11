import React from 'react';
import { TableRow, TableCell, Tooltip } from '@material-ui/core';
import { WomenData } from './DataSet';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    textDecoration:'none',
    '&:hover': {
      background: '#F2F1ED'
    }
  }
})

const Women = ({handleClick}) => {
  const classes = useStyles();
  return <>
    {WomenData.map(item =>
      <Tooltip title='Click Here to Read More' arrow={true} placement='top' key={item.key}>
          <TableRow id={item.key} onClick={handleClick} className={classes.root}>
            <TableCell align='center'>{item.sr}</TableCell>
            <TableCell align='center'><img src={item.imgsrc} alt="Shirt" className='items_img' /></TableCell>
            <TableCell align='center'>{item.name}</TableCell>
            <TableCell align='center'>{item.price}</TableCell>
          </TableRow>
      </Tooltip>
    )}
  </>
}

export default Women;
