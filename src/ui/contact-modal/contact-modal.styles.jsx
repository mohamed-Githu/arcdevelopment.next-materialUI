import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "50em",
    alignItems: "flex-end",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 3),
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "40em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      width: "100%",
      height: "100vh",
    },
  },
  formContainer: {
    width: "100%",
    maxWidth: "20em",
  },
  closeIcon: {
    color: theme.palette.common.blue,
    marginRight: "-.5em",
  },
}));

export default useStyles;
