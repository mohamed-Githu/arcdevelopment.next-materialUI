import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      maringTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      maringTop: "2em",
    }
  },
  leftContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    }
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "10em 2em",
      margin: "0 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
      margin: 0,
    }
  },
  revolutionContainer: {
    backgroundImage: 'url("/assets/repeatingBackground.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "90em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12em",
  },
  informationContainer: {
    height: "70rem",
    backgroundImage: 'url("/assets/infoBackground.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    padding: "0 5em",
    [theme.breakpoints.down("md")]: {
      padding: "0 3em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 2em",
    }
  },
  informationItems: {
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    }
  }
}));

export default useStyles;
