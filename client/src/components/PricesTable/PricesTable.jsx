import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceSelector from './../../store/selectors/pricesSelector';
import { disconnectSocket, getPrices } from './../../store/pricesReducer/pricesActions';
import { tableColumns } from '../../config/pricesTableConfig';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import style from './PricesTable.style';
import PriceTickerParam from './PriceTicker/PriceTickerParam/PriceTickerParam';

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
              <PriceTickerParam className={classes.cell} param={price.change} />
              <PriceTickerParam className={classes.cell} param={price.change_percent} />
              <PriceTickerParam className={classes.cell} param={price.dividend} />
              <PriceTickerParam className={classes.cell} param={price.exchange} />
              <PriceTickerParam className={classes.cellWide} param={price.last_trade_time} />
              <PriceTickerParam className={classes.cell} param={price.price} />
              <PriceTickerParam className={classes.cell} param={price.ticker} />
              <PriceTickerParam className={classes.cell} param={price.yield} />
            </TableRow>
          ))
        }
      </TableBody>
    </TableContainer>
  )
};

export default PricesTable;