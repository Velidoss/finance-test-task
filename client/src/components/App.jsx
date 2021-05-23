import React from 'react';
import Container from '@material-ui/core/Container';
import style from './App.style';
import PricesTable from './PricesTable/PricesTable';
import RetrieveButton from './RetrieveButton/RetrieveButton';

const App = () => {
  const classes = style();

  return (
    <Container className={classes.container} maxWidth="lg">
      <PricesTable />
      <RetrieveButton />
    </Container>
  );
}

export default App;
