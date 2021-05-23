import { TableCell } from '@material-ui/core';
import React from 'react';

const PriceTickerParam = ({className, param}) => {

  return (
    <TableCell className={className} align="center">{param}</TableCell>
  )
};

export default PriceTickerParam;