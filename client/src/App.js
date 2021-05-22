import './App.css';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [prices, setPrices] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data)
  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
