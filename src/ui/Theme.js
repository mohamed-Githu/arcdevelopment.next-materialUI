import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      white: "#fff",
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      color: "white",
      textTransform: "none", 
      borderRadius: "50px",
      padding: "6px 16px",
      backgroundColor: `${arcOrange}`,
    },
    body1: {
      fontWeight: 700
    },
    h2: {
      fontFamily: "Raleway",
      color: `${arcBlue}`,
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.5
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "Pacifico",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Raleway",
      color: arcBlue,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body2: {
      fontSize: "1.25em",
      fontWeight: 300,
      color: arcGrey,
    },
    learnMore: {
      borderRadius: "50px",
      fontSize: ".9rem",
      color: arcBlue,
      border: `2px solid ${arcBlue}`,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
      height: 45,
      width: 145,
    }
  },
  overrides: {
    MuiButton: {
      text: {
        padding: 0
      },
      root: {
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent"
        },
        "&:disabled": {
          backgroundColor: lighten(arcGrey, .7),
        }
      },
      label: {
        width: "unset",
      },
    },
    MuiInputLabel: {
      root: {
        zIndex: 1,
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderColor: darken(arcBlue, .2),
        },
      },
    },
    MuiInputBase: {
      input: {
        color: arcGrey,
        fontWeight: 300,
        backgroundColor: lighten(arcBlue, .95),
      },
      inputMultiline: {
        backgroundColor: "transparent",
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        minWidth: 72,
        "@media screen (min-width: 600px)": {
          minWidth: 72,
        },
      },
    },
    MuiGrid: {
      item: {
        margin: undefined,
      },
    },
    MuiFormControl: {
      root: {
        margin: undefined,
        border: undefined,
      }
    }
  },
})

export default theme;
