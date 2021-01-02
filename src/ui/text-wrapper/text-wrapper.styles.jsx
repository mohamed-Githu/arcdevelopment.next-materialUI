import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    margin: "0 1.5em",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      textAlign: "center",
      margin: 0,
    },
  },
}));

export default useStyles;
