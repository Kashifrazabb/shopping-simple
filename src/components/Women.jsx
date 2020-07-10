import React from 'react';
import { TableRow, TableCell, Tooltip } from '@material-ui/core';
import { WomenData } from './DataSet';

const Women = () =>
  <>
    {WomenData.map(item =>
    <Tooltip title='Click Here to Read More' arrow='true' placement='top'>
      <TableRow onClick={()=>document.location = '/home'} id='tr'>
        <TableCell align='center'>{item.sr}</TableCell>
        <TableCell align='center'><img src={item.imgsrc} alt="Shirt" className='items_img' /></TableCell>
        <TableCell align='center'>{item.name}</TableCell>
        <TableCell align='center'>{item.price}</TableCell>
      </TableRow>
      </Tooltip>
    )}
  </>

export default Women;
