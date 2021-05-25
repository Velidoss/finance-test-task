import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectSocket, disconnectSocket, stopRetrieve } from '../../../store/pricesReducer/pricesActions';
import retrievingSelector from '../../../store/selectors/retrievingSelector';
import { startRetrieve } from '../../../store/pricesReducer/pricesActions';
import { Button, Grid } from '@material-ui/core';
import style from './RetrieveButton.style';

const RetrieveButton = () => {
  const classes = style();
  const retrieving = useSelector(retrievingSelector);
  const dispatch = useDispatch();

  const stop = () => {
    dispatch(disconnectSocket());
    dispatch(stopRetrieve());
  };

  const start = () => {
    dispatch(startRetrieve());
    dispatch(connectSocket(5000));
  };

  return (
    <Grid container item justify="center" alignItems="center">
      {
        retrieving 
        ? (
          <Button 
            className={classes.stopButton} 
            color="secondary" 
            variant="contained" 
            onClick={stop}
          >
            Stop retrieve
          </Button>
        )
        : (
          <Button 
            className={classes.startButton} 
            color="primary" 
            variant="contained" 
            onClick={start}
          >
            Start retrieve
          </Button>
        )
      }
    </Grid>
  )
};

export default RetrieveButton;