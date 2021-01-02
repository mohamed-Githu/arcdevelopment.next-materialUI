import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  servicesSection: {
    marginTop: "-5em",
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-8em"
    }
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    }
  },
  title: {
    paddingLeft: "2em",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    }
  }
}));

export default useStyles;
