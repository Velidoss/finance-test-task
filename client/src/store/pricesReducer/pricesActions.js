import { GET_PRICES, STOP_RETRIEVING, START_RETRIEVING, STOP_RETRIEVE, START_RETRIEVE } from './../actionTypes/actionTypes';

export const getPrices = (interval) => ({
  type: GET_PRICES,
  interval,
});

export const stopRetrieve = () =>({
    type: STOP_RETRIEVE,
  });

export const startRetrieve = () => ({
  type: START_RETRIEVE,
});

export const disconnectSocket = () => {
  console.log('dispatch disconnect')
  return {
    type: STOP_RETRIEVING,
  }
};

export const connectSocket = (interval) => {
  console.log('dispatch reconnect')
  return {
    type: START_RETRIEVING,
    newInterval: interval,
  }
};


