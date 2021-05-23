import { GET_PRICES, DISCONNECT_SOCKET, STOP_RETRIEVE, START_RETRIEVE } from './../actionTypes/actionTypes';

export const getPrices = (interval) => ({
  type: GET_PRICES,
  interval,
});

export const stopRetrieve = () => ({
  type: STOP_RETRIEVE,
});

export const startRetrieve = () => ({
  type: START_RETRIEVE,
});

export const disconnectSocket = () => ({
  type: DISCONNECT_SOCKET,
});