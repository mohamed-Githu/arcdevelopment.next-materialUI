import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    color: "#fff",
    maxWidth: "20em",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  header: {
    marginTop: "5em",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  container: {
    padding: "0 5em",
    height: "90em",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 5em",
    },
  },
  image: {
    maxWidth: "40em",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default useStyles;
