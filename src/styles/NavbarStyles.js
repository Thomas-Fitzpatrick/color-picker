import sizes from "./sizes";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active": {
      outline: "none",
      boxShadow: "none",
      marginTop: "-3px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      [sizes.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
