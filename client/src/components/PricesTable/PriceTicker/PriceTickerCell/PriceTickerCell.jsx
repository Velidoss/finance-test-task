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

  return status ? (
    <TickerCell 
      className={className} 
      dataColorClass={colorClass}
      param={param} 
      icon={status === PRICE_ASCENDING 
        ? <IconAscending style={{marginLeft: 10}} /> 
        : <IconDescending style={{marginLeft: 10}} />
      }
    />
  )
  :(
    <TickerCell 
      className={className} 
      dataColorClass={colorClass}
      param={param}
    />
  )
};

export default PriceTickerCell;