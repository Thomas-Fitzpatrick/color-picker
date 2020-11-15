import "./App.css";
import "./Palette.js";
import Palatte from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
