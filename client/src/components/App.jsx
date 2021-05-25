import React from 'react';
import Container from '@material-ui/core/Container';
import style from './App.style';
import PricesTable from './PricesTable/PricesTable';
import TableControls from './TableControls/TableControls';
import { useSelector } from 'react-redux';
import statusSelector from './../store/selectors/statusSelector';
import { appStatuses } from './../constants/constants';
import Loader from './Loader/Loader';
import { Typography } from '@material-ui/core';

const App = () => {
  const {STATUS_LOADING} = appStatuses;

  const classes = style();
  const status = useSelector(statusSelector);

  return (
    <Container className={classes.container} maxWidth="lg">
      {
        status === STATUS_LOADING && <Loader />
      }
      <Typography align="center" variant="h1">Price tickers</Typography>
      <TableControls />
      <PricesTable />
    </Container>
  );
}

export default App;
