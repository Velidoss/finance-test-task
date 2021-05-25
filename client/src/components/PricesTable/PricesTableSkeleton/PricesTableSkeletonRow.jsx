import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { tableColumns } from './../../../config/pricesTableConfig';
import style from '../PricesTable.style';
import Skeleton from '@material-ui/lab/Skeleton';

const PricesTableSkeletonRow = () => {
  const classes = style();
  return (
    <TableRow>
    {
      tableColumns.map((column, index) => (
        <TableCell className={classes[column.class]} key={index} align="center">
          <Skeleton />
        </TableCell>
      ))
    }      
  </TableRow>
  )
};

export default PricesTableSkeletonRow;