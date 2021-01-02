import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  arrowContainer: {
    paddingTop: ".5em",
  },
}));

export default useStyles;
