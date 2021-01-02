import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "25em",
    },
  },
}));

export default useStyles;
