import { makeStyles } from "@material-ui/core";

const LoaderStyles = makeStyles({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255, 0.8)',
    zIndex: 1000,
  },
});

export default LoaderStyles;