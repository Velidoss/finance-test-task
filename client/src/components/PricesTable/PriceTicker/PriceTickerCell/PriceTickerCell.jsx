import React, { useEffect, useState } from 'react';
import { priceStatuses } from '../../../../constants/constants';
import style from './PriceTickerCell.style';
import TickerCell from './../TickerCell/TickerCell';
import IconAscending from './PriceTickerIcons/IconAscending';
import IconDescending from './PriceTickerIcons/IconDescending';

const {PRICE_ASCENDING} = priceStatuses;

const PriceTickerCell = ({className, param, status}) => {

  const classes = style();
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    if (status) {
      status === PRICE_ASCENDING 
      ? setColorClass(classes.ascending)
      : setColorClass(classes.descending)
    }
  }, [status, classes.ascending, classes.descending])

  return (
    <TickerCell 
      className={`${className} ${colorClass}`} 
      param={param} 
      icon={status === PRICE_ASCENDING 
        ? <IconAscending /> 
        : <IconDescending />
      }
    />
  )
};

export default PriceTickerCell;