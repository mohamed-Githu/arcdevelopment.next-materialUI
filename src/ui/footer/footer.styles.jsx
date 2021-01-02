import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute",
  },
  gridLink: {
    fontFamily: "Arial",
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: ".75rem",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  socialIcon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down("xs")]: {
      width: "2.5rem",
      height: "2.5rem"
    }
  },
  socialContainer: {
    position: "absolute",
    right: "1.5rem",
    marginTop: "-5rem",
    "& *": {
      marginLeft: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      right: ".6rem"
    }
  },
  linksContainer: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 0,
  }
}))

export default useStyles;