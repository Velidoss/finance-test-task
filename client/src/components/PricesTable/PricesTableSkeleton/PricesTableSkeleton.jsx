import React from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import style from '../PricesTable.style';
import { tableColumns } from './../../../config/pricesTableConfig';
import PricesTableSkeletonRow from './PricesTableSkeletonRow';

const PricesTableSkeleton = () => {

  const classes = style();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <TableHead>
        <TableRow>
          <PricesTableSkeletonRow />    
        </TableRow>
      </TableHead>
      <TableBody>
        <PricesTableSkeletonRow />
        <PricesTableSkeletonRow />
        <PricesTableSkeletonRow />
        <PricesTableSkeletonRow />
        <PricesTableSkeletonRow />
        <PricesTableSkeletonRow />
      </TableBody>
    </TableContainer>
  )
};

export default PricesTableSkeleton;