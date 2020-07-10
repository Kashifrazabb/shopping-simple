import React from 'react';
import { TableRow, TableCell, Tooltip } from '@material-ui/core';
import { MenData } from './DataSet';

const Men = () =>
  <>
    {MenData.map(item =>
      <Tooltip title='Click Here to Read More' arrow='true' placement='top'>
        <TableRow onClick={() => document.location = '/home'} id='tr' onClick={(e)=>console.log(e.target)}>
          <TableCell align='center'>{item.sr}</TableCell>
          <TableCell align='center'><img src={item.imgsrc} alt="Shirt" className='items_img' /></TableCell>
          <TableCell align='center'>{item.name}</TableCell>
          <TableCell align='center'>{item.price}</TableCell>
        </TableRow>
      </Tooltip>
    )}
  </>
export default Men;
