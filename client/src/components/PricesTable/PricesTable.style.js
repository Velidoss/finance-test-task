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
  },
  cellData: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});

export default PricesTableStyles;