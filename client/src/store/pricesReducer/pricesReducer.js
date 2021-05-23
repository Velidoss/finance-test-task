import { SET_PRICES } from '../actionTypes/actionTypes';
import { appStatuses } from './../../constants/constants';
import comparePrices from './../../utils/comparePrices';

const {STATUS_READY} = appStatuses;

const initialState = {
  prices: [],
  status: STATUS_READY,
};

const pricesReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_PRICES: 
      return {...state, prices: comparePrices(state.prices, payload)};
    default: 
      return {...state};
  }
};

export default pricesReducer;