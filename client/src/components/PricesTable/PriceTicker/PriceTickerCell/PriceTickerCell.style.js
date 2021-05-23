const { makeStyles } = require("@material-ui/core");

const PriceTickerCellStyles = makeStyles({
  ascending: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(111, 209, 102, 0.3)',
  },
  descending: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(250, 100, 62, 0.3)',
  },
  icon: {
    marginLeft: 10,
  }
});

export default PriceTickerCellStyles;