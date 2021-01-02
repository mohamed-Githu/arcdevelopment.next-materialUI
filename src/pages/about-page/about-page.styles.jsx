import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContianer: {
    padding: "2em 5em",
    alignItems: "space-around",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
  mission: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5em",
    maxWidth: "50em",
    lineHeight: 1.4,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em"
    }
  },
  missionContainer: {
    justifyContent: "center",
    margin: "10em 0",
    [theme.breakpoints.down("md")]: {
      margin: "5em 0",
    },
  },
  img: {
    maxHeight: "22em",
    marginLeft: "5em",
    [theme.breakpoints.down("md")]: {
      margin: "5em 0 0 0",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
    },
  },
}));

export default useStyles;
