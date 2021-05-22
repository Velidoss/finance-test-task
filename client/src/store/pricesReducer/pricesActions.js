import { GET_PRICES, DISCONNECT_SOCKET } from './../actionTypes/actionTypes';

export const getPrices = () => ({
  type: GET_PRICES,
})

export const disconnectSocket = () => ({
  type: DISCONNECT_SOCKET,
})