import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  carousalItem: {
    display: "grid",
    flexDirection: "column",
    alignItems: "flex-start",
    textTransform: "none",
    borderRadius: 0,
    paddingTop: "1em",
  },
  icon: {
    width: "12em",
    height: "10em",
  },
});

export default useStyles;
