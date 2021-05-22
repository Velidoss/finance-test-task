import './App.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disconnectSocket, getPrices } from './store/pricesReducer/pricesActions';
import priceSelector from './store/selectors/pricesSelector';

const App = () => {
  const dispatch = useDispatch();

  const prices = useSelector(priceSelector);

  useEffect(() => {
    dispatch(getPrices());
  }, []);

  const handleClick = () => {
    dispatch(disconnectSocket());
  };

  return (
    <div className="App">
      {prices.map((price) => (
        <div key={price.ticker}>
          <span>{price.change}</span> | 
          <span>{price.change_percent}</span> | 
          <span>{price.dividend}</span> | 
          <span>{price.exchange}</span> | 
          <span>{price.last_trade_time}</span> | 
          <span>{price.price}</span> | 
          <span>{price.ticker}</span> | 
          <span>{price.yield}</span> | 
        </div>
      ))}
      <button onClick={handleClick}>Stop retrieve</button>
    </div>
  );
}

export default App;
