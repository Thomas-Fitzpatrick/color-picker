import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    [sizes.down("xs")]: {
      width: drawerWidth * 0.8,
    },
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    [sizes.down("xs")]: {
      width: drawerWidth * 0.8,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    marginTop: "64px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [sizes.down("xs")]: {
      marginLeft: -drawerWidth * 0.8,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
  },
  button: {
    width: "50%",
  },
}));

export default useStyles;
