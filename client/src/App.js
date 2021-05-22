import './App.css';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrices } from './store/pricesReducer/pricesActions';

const App = () => {
  const [prices, setPrices] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data)
  useEffect(() => {
    dispatch(getPrices());
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
