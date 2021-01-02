import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    flexDirection: "column",
  },
  animationContainer: {
    maxWidth: "50em",
    margin: "12em 10em 0 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "35em",
      margin: "5em auto -4em auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
    },
  },
  headingContainer: {
    padding: "2em 5em",
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em",
    },
  },
  title: {
    fontWeight: 400,
    fontSize: "2.25em",
    lineHeight: 1.25,
  },
  rightContainer: {
    margin: "0 2em 15em 0",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  arrowsContainer: {
    justifyContent: "space-between",
    margin: "2.5em auto",
    marginTop: "1em",
    width: "20em",
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 220,
    height: 50,
    fontSize: "1.25em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    "&$disabled": {
      backgroundColor: theme.palette.common.grey,
    },
  },
  arrow: {
    color: theme.palette.common.blue,
    "& *": {
      fontSize: "1em",
    },
  },
  carousal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "38em",
    [theme.breakpoints.down("sm")]: {
      height: "67em",
    },
  },
  optionsContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
