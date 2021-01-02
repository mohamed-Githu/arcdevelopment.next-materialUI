import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.typography.learnMore,
    "&:hover": {
      backgroundColor: theme.palette.grey.A100
    }
  },
  arrow: {
    width: 15,
    marginLeft: 10,
  }
}));

export default useStyles;