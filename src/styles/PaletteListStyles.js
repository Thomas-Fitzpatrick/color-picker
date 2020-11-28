import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#dbeeff",
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
    overflow: "scroll",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#00002b",
    alignItems: "center",
    "& h1": {
      fontSize: "2rem",
    },
    "& a": {
      fontSize: "1.2rem",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
};

export default styles;
