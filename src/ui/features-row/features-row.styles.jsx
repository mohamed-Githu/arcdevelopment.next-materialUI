import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  featuresContainer: {
    margin: "20em 0",
  },
  featuresContainerBreaked: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15em 0",
  },
  feature: {
    maxWidth: "40em",
    margin: "5em 0",
  },
  image: {
    maxWidth: "28em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
    },
  },
}));

export default useStyles;
