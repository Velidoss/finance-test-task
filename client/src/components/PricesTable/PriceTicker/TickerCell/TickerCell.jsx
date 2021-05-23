import { TableCell } from '@material-ui/core';
import React from 'react';

const TickerCell = ({className, param, icon}) => {

  return (
  <TableCell
    className={className}
    align="center"
  >
    {param}
    {icon}
  </TableCell>
  )
};

export default TickerCell;