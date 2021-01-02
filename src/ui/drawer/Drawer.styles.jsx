import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: ".7"
  },
  drawerItemEstimate: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.orange,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    }
  },
}));

export default useStyles;
  