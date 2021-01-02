import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  icon: {
    marginLeft: "2rem",
    width: "14em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "2em",
    },
  },
  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  textContainer: {
    width: "40em",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
      width: "unset",
      textAlign: "center",
    },
  },
}));

export default useStyles;