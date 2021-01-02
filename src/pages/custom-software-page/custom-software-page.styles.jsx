import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "2em 5em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    }
  },
  gridContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      height: "80em",
    },
  },
  middleGrid: {
    paddingTop: "12em",
    height: "80em",
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
      height: "70em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10em",
    },
  },
}));

export default useStyles;
