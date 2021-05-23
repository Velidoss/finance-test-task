import { priceStatuses } from '../constants/constants';

const {PRICE_ASCENDING, PRICE_DESCENDING} = priceStatuses;

const comparePrices = (currentPrices, newPrices) => {
  if ( currentPrices.length === 0 ) {
    return newPrices;
  }
  return newPrices.map((newPrice, index) => {
    if (newPrice.price - currentPrices[index].price > 0) {
      return {...newPrice, status: PRICE_ASCENDING}
    }
    if (newPrice.price - currentPrices[index].price < 0) {
      return {...newPrice, status: PRICE_DESCENDING}
    }
    return newPrice;
  })
};

export default comparePrices;