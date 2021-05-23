import { TableCell } from '@material-ui/core';
import React from 'react';
import style from '../../PricesTable.style';

const TickerCell = ({className, dataColorClass, param, icon}) => {

  const classes  = style();

  return (
  <TableCell
    className={className}
    align="center"
  >
    <span className={`${classes.cellData} ${dataColorClass}`}>
      {param}
      {icon}
    </span>

  </TableCell>
  )
};

export default TickerCell;