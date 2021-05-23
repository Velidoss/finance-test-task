import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceSelector from './../../store/selectors/pricesSelector';
import { disconnectSocket, getPrices } from './../../store/pricesReducer/pricesActions';
import { tableColumns } from '../../config/pricesTableConfig';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const PricesTable = (props) => {

  const dispatch = useDispatch();

  const prices = useSelector(priceSelector);

  useEffect(() => {
    dispatch(getPrices());
    return () => dispatch(disconnectSocket());
  }, []);


  return (
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          {
            tableColumns.map((column, index) => (
              <TableCell key={index} align="right">{column.headerName}</TableCell>
            ))
          }      
        </TableRow>

      </TableHead>
      <TableBody>
        {
          prices.map((price) => (
            <TableRow key={price.ticker}>
              <TableCell align="right">{price.change}</TableCell>
              <TableCell align="right">{price.change_percent}</TableCell>
              <TableCell align="right">{price.dividend}</TableCell>
              <TableCell align="right">{price.exchange}</TableCell>
              <TableCell align="right">{price.last_trade_time}</TableCell>
              <TableCell align="right">{price.price}</TableCell>
              <TableCell align="right">{price.ticker}</TableCell>
              <TableCell align="right">{price.yield}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </TableContainer>
  )
};

export default PricesTable;