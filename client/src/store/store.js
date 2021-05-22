import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import pricesReducer from './pricesReducer/pricesReducer';
const socket = io('http://localhost:4000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

// function reducer(state = {}, action){
//   switch(action.type){
//     case 'message':
//       return Object.assign({}, {message:action.data});
//     default:
//       return state;
//   }
// }
const store = applyMiddleware(socketIoMiddleware)(createStore)(pricesReducer);

store.subscribe(()=>{
  console.log('new client state', store.getState());
});
// store.dispatch({type:'server/hello', data:'Hello!'});

export default store;