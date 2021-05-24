import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import style from './Loader.style';

const Loader = () => {
  const classes = style();

  return (
    <Grid className={classes.loaderContainer}>
      <CircularProgress />
    </Grid>
  )
};

export default Loader;