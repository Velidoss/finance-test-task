const { makeStyles } = require("@material-ui/core");

const PricesTableStyles = makeStyles({
  table: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    minWidth: 100,
  },
  cellWide: {
    minWidth: 200,
  }
});

export default PricesTableStyles;