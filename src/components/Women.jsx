import React from 'react';
import {TableRow,TableCell} from '@material-ui/core';
import {WomenData} from './DataSet';

const Women = () => {
    return (
        <>
                {WomenData.map(item=>
              <TableRow>
              <TableCell align='center'>{item.sr}</TableCell>
              <TableCell align='center'><img src={item.imgsrc} alt="Shirt" className='items_img'/></TableCell>
              <TableCell align='center'>{item.name}</TableCell>
              <TableCell align='center'>{item.price}</TableCell>
            </TableRow>
              )}
        </>
    )
}

export default Women;
