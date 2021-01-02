import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  messageText: {
    border: `2px solid ${theme.palette.common.blue}`,
    margin: "2em 0",
    padding: ".5em",
    boxSizing: "border-box",
    borderRadius: 5,
    "&:hover": {
      border: `2px solid ${theme.palette.common.blue}`,
    }
  },
  button: {
    ...theme.typography.estimate,
    fontFamily: "Pacifico",
    borderRadius: 50,
    height: 45,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    "& img": {
      marginLeft: ".5em",
    }
  },
}));

export default useStyles;
