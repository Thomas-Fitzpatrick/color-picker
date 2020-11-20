import React from "react";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-footer">
      <div>{paletteName}</div>
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
