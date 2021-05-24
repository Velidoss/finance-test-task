import { GET_PRICES, STOP_RETRIEVING, START_RETRIEVING, STOP_RETRIEVE, START_RETRIEVE, TOGGLE_APP_STATUS } from './../actionTypes/actionTypes';

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

export const disconnectSocket = () => ({
    type: STOP_RETRIEVING,
});

export const setAppStatus = (newStatus) => ({
  type: TOGGLE_APP_STATUS,
  payload: newStatus,
});

export const connectSocket = (interval) => {
  return {
    type: START_RETRIEVING,
    newInterval: interval,
  }
};


