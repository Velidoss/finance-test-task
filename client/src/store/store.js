import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import pricesReducer from './pricesReducer/pricesReducer';
const socket = io('http://localhost:4000');

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store = createStore(pricesReducer, applyMiddleware(socketIoMiddleware));

export default store;