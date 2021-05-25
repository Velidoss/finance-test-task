import { Grid, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import createSliderMarks from '../../../utils/createSliderMarks';
import { connectSocket, disconnectSocket } from '../../../store/pricesReducer/pricesActions';

const IntervalPicker = () => {
  const [intervalTime, setIntervalTime] = React.useState(5);

  const dispatch = useDispatch();

  const handleSliderChange = (_, newValue) => {
    setIntervalTime(newValue);
  };

  const setIntervalOfData = () => {
    dispatch(disconnectSocket());
    dispatch(connectSocket(intervalTime  * 1000));
  };

  return (
    <Grid item container>
      <Typography>Interval</Typography>
      <Slider
        value={typeof intervalTime === 'number' ? intervalTime : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        onBlur={setIntervalOfData}
        min={5}
        max={300}
        step={5}
        valueLabelDisplay="auto"
        marks={createSliderMarks()}
      />
    </Grid>
    
  )
};

export default IntervalPicker;