import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: "center",
    margin: "10em 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    maxWidth: "28em",
  },
  leftContainer: {
    marginRight: "1.5em",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
//   title: {
//     [theme.breakpoints.down("md")]: {
//     //   margin: 0,
//     }
//   }
}));

export default useStyles;
