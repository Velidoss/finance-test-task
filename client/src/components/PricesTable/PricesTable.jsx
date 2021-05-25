import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceSelector from './../../store/selectors/pricesSelector';
import { getPrices } from './../../store/pricesReducer/pricesActions';
import { tableColumns } from '../../config/pricesTableConfig';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import style from './PricesTable.style';
import PriceTickerCell from './PriceTicker/PriceTickerCell/PriceTickerCell';
import TickerCell from './PriceTicker/TickerCell/TickerCell';
import retrievingSelector from './../../store/selectors/retrievingSelector';
import { disconnect } from './../../store/store';
import statusSelector from './../../store/selectors/statusSelector';
import PricesTableSkeleton from './PricesTableSkeleton/PricesTableSkeleton';
import { appStatuses } from './../../constants/constants';

const PricesTable = (props) => {
  const { STATUS_READY } = appStatuses;
  const classes = style();

  const dispatch = useDispatch();

  const retrieving = useSelector(retrievingSelector);
  const prices = useSelector(priceSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    if (retrieving) {
      dispatch(getPrices(5000));
    }
    return () => {
      disconnect();
    };
  }, []);

  return status === STATUS_READY ? (
  
    <TableContainer classes={{root: classes.root}} className={classes.table} component={Paper}>
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
              <TickerCell className={classes.cell} param={price.ticker} />
              <PriceTickerCell className={classes.cell} param={price.price} status={price.status} />              
              <TickerCell className={classes.cell} param={`${parseInt(price.change_percent * 100)}%`} />
              <TickerCell className={classes.cell} param={price.change} />
              <TickerCell className={classes.cell} param={price.dividend} />
              <TickerCell className={classes.cell} param={price.exchange} />
              <TickerCell className={classes.cell} param={price.yield} />
            </TableRow>
          ))
        }
      </TableBody>
    </TableContainer>
  )
  : (
  <PricesTableSkeleton />
  )
};

export default PricesTable;