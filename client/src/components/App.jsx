import React from 'react';
import { useDispatch } from 'react-redux';
import { disconnectSocket } from '../store/pricesReducer/pricesActions';
import Container from '@material-ui/core/Container';
import style from './App.style';
import PricesTable from './PricesTable/PricesTable';

const App = () => {

  const dispatch = useDispatch();

  const classes = style();

  const handleClick = () => {
    dispatch(disconnectSocket());
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <PricesTable />
      <button onClick={handleClick}>Stop retrieve</button>
    </Container>
  );
}

export default App;
