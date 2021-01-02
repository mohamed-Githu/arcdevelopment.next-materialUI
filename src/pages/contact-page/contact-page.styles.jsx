import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: "2em",
  },
  topContainer: {
    width: "100%",
    maxWidth: "20em",
    flexDirection: "column",
  },
  text: {
    color: theme.palette.common.blue,
    fontSize: "1em",
  },
  formContainer: {
    marginTop: "2em",
    width: "100%",
    maxWidth: "20em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default useStyles;
