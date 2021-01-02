import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContianer: {
    padding: "2em 5em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
  topSectionContainer: {
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  topSectionTextContainer: {
    maxWidth: "40em",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      "&:last-child": {
        marginTop: "5em",
      },
    },
  },
  image: {
    maxWidth: "40em",
    marginRight: "5em",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
  },
}));

export default useStyles;
