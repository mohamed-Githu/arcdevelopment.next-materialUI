import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
}));

export default useStyles;
