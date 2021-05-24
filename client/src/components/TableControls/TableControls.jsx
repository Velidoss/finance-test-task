import { Grid } from '@material-ui/core';
import React from 'react';
import IntervalPicker from './IntervalPicker/IntervalPicker';
import RetrieveButton from './RetrieveButton/RetrieveButton';

const TableControls = () => {

  return (
    <Grid container item direction="row">
      <Grid item container justify="center" xs={6}>
        <IntervalPicker />
      </Grid>
      <Grid item container justify="center" xs={6}>
        <RetrieveButton />
      </Grid>
    </Grid>
  )
};

export default TableControls;