import sizes from "./sizes";

const styles = {
  root: {
    width: "100%",
  },
  picker: {
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    marginTop: "1rem",
    padding: "1rem",
    fontSize: "2rem",
    [sizes.down("xs")]: {
      fontSize: "1.5rem",
      marginTop: "0.5rem",
      padding: "0.5rem",
    },
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

export default styles;
