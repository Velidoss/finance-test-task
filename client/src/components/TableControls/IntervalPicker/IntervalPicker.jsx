import { Grid, Popover, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import createSliderMarks from '../../../utils/createSliderMarks';
import { connectSocket, disconnectSocket } from '../../../store/pricesReducer/pricesActions';

const IntervalPicker = () => {
  const [value, setValue] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleSliderChange = (_, newValue) => {
    setValue(newValue);
  };

  const setIntervalOfData = () => {
    dispatch(disconnectSocket());
    dispatch(connectSocket(value  * 1000));
  };

  return (
    <Grid item container>
      <Typography>Interval</Typography>
      <Slider
        value={typeof value === 'number' ? value : 0}
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