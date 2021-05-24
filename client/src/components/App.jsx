import React from 'react';
import Container from '@material-ui/core/Container';
import style from './App.style';
import PricesTable from './PricesTable/PricesTable';
import TableControls from './TableControls/TableControls';
import Loader from './Loader/Loader';

const App = () => {
  const classes = style();

  return (
    <Container className={classes.container} maxWidth="lg">
      <TableControls />
      <PricesTable />
    </Container>
  );
}

export default App;
