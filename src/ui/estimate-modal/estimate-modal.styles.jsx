import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "50em",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 3),
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "grid",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30em",
      height: "100vh",
      alignItems: "center",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: ".4rem",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 .05rem .1rem rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 20,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "lightgrey",
        borderRadius: 20,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100vh",
    },
  },
  closeIcon: {
    color: theme.palette.common.blue,
  },
  iconContainer: {
    position: "absolute",
    top: 2,
    right: 2,
  },
  formContainer: {
    width: "100%",
    maxWidth: "20em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  leftContainer: {
    flexDirection: "columm",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  cost: {
    color: theme.palette.common.orange,
    fontSize: "2em",
    fontWeight: 700,
  },
  text: {
    fontSize: "1em",
  },
  doneIcon: {
    color: theme.palette.common.orange,
    fontSize: "2.5em",
  },
  list: {
    overflowY: "scroll",
    maxHeight: "25em",
    "&::-webkit-scrollbar": {
      width: ".4rem",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 .05rem .1rem rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgb(240, 240, 240)",
      borderRadius: 20,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "lightgrey",
      borderRadius: 20,
    },
    [theme.breakpoints.down("sm")]: {
      overflowY: "unset",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    margin: "0 auto",
    marginBottom: "1em",
    height: 55,
    fontSize: "1.25em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    "&$disabled": {
      backgroundColor: theme.palette.common.grey,
    },
    "& img": {
      marginLeft: ".5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      marginTop: "3.8em",
    },
  },
  topSection: {
    alignSelf: "center",
    marginTop: "1em",
  },
  contentContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2em",
    }
  },
  rightContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    }
  }
}));

export default useStyles;
