import { SET_PRICES, STOP_RETRIEVE } from '../actionTypes/actionTypes';
import { appStatuses } from './../../constants/constants';
import comparePrices from './../../utils/comparePrices';
import { START_RETRIEVE } from './../actionTypes/actionTypes';

const {STATUS_READY} = appStatuses;

const initialState = {
  prices: [],
  retrieving: true,
  status: STATUS_READY,
};

const pricesReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_PRICES: 
      return {...state, prices: comparePrices(state.prices, payload)};
    case STOP_RETRIEVE: 
      return {...state, retrieving: false};
    case START_RETRIEVE: 
      return {...state, retrieving: true};
    default: 
      return {...state};
  }
};

export default pricesReducer;