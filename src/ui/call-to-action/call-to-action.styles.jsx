import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'url("/assets/mobileBackground.jpg")',
      backgroundAttachment: "inherit",
      padding: "0 3em",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      align: "center",
      padding: "0",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    height: 80,
    width: 205,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  textContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center"
    }
  }
}));

export default useStyles;
