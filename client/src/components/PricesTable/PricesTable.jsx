import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceSelector from './../../store/selectors/pricesSelector';
import { disconnectSocket, getPrices } from './../../store/pricesReducer/pricesActions';
import { tableColumns } from '../../config/pricesTableConfig';
import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import style from './PricesTable.style';
import PriceTickerCell from './PriceTicker/PriceTickerCell/PriceTickerCell';
import TickerCell from './PriceTicker/TickerCell/TickerCell';
import retrievingSelector from './../../store/selectors/retrievingSelector';

const PricesTable = (props) => {
  const classes = style();

  const dispatch = useDispatch();

  const retrieving = useSelector(retrievingSelector);
  const prices = useSelector(priceSelector);

  useEffect(() => {
    if (retrieving) {
      dispatch(getPrices(10000));
    }
    return () => dispatch(disconnectSocket());
  }, []);

  const setIntervalOfData = () => {
    dispatch(disconnectSocket());
    dispatch(getPrices(3000));
  };


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
              <TickerCell className={classes.cell} param={price.change} status={price.status} />
              <TickerCell className={classes.cell} param={price.change_percent} status={price.status} />
              <TickerCell className={classes.cell} param={price.dividend} status={price.status} />
              <TickerCell className={classes.cell} param={price.exchange} status={price.status} />
              <TickerCell className={classes.cellWide} param={price.last_trade_time} status={price.status} />
              <PriceTickerCell className={classes.cell} param={price.price} status={price.status} />
              <TickerCell className={classes.cell} param={price.ticker} status={price.status} />
              <TickerCell className={classes.cell} param={price.yield} status={price.status} />
            </TableRow>
          ))
        }
      </TableBody>
      {/* <Button onClick={setIntervalOfData}>
        Set interval to 3 seconds
      </Button> */}
    </TableContainer>
  )
};

export default PricesTable;