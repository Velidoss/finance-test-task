import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectSocket, disconnectSocket, stopRetrieve } from '../../../store/pricesReducer/pricesActions';
import retrievingSelector from '../../../store/selectors/retrievingSelector';
import { startRetrieve, getPrices } from '../../../store/pricesReducer/pricesActions';

const RetrieveButton = () => {
  const retrieving = useSelector(retrievingSelector);
  const dispatch = useDispatch();

  const stop = () => {
    dispatch(disconnectSocket());
    dispatch(stopRetrieve());
  };

  const start = () => {
    dispatch(startRetrieve());
    dispatch(connectSocket(10000));
  };

  return retrieving 
  ? (
    <button onClick={stop}>Stop retrieve</button>
  )
  : (
    <button onClick={start}>Start retrieve</button>
  )
};

export default RetrieveButton;