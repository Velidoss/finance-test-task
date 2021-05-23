import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceSelector from './../../store/selectors/pricesSelector';
import { disconnectSocket, getPrices } from './../../store/pricesReducer/pricesActions';
import { tableColumns } from '../../config/pricesTableConfig';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import style from './PricesTable.style';

const PricesTable = (props) => {
  const classes = style();

  const dispatch = useDispatch();

  const prices = useSelector(priceSelector);

  useEffect(() => {
    dispatch(getPrices());
    return () => dispatch(disconnectSocket());
  }, []);


  return (
    <TableContainer className={classes.table} component={Paper}>
      <TableHead>
        <TableRow>
          {
            tableColumns.map((column, index) => (
              <TableCell className={classes[column.class]} key={index} align="center">{column.headerName}</TableCell>
            ))
          }      
        </TableRow>

      </TableHead>
      <TableBody>
        {
          prices.map((price) => (
            <TableRow key={price.ticker}>
              <TableCell className={classes.cell} align="center">{price.change}</TableCell>
              <TableCell className={classes.cell} align="center">{price.change_percent}</TableCell>
              <TableCell className={classes.cell} align="center">{price.dividend}</TableCell>
              <TableCell className={classes.cell} align="center">{price.exchange}</TableCell>
              <TableCell className={classes.cell} align="center">{price.last_trade_time}</TableCell>
              <TableCell className={classes.cell} align="center">{price.price}</TableCell>
              <TableCell className={classes.cell} align="center">{price.ticker}</TableCell>
              <TableCell className={classes.cell} align="center">{price.yield}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </TableContainer>
  )
};

export default PricesTable;