import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "inline-block",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [sizes.down("xs")]: {
      width: `calc(100% - ${drawerWidth * 0.8}px)`,
      marginLeft: drawerWidth * 0.8,
    },

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [sizes.down("xs")]: {
      marginRight: 0,
    },
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      marginRight: "0.3rem",
    },
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: "0 0.1rem",
      padding: "0.2rem",
    },
  },
  title: {
    [sizes.down("xs")]: {
      fontSize: "1rem",
    },
  },
});

export default styles;
