import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    opacity: ".7",
    "&:hover": {
      opacity: 1
    }
  },
}));

export default useStyles;