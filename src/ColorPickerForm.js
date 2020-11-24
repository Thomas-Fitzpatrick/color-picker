import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function ColorPickerForm(props) {
  const { paletteIsFull, addNewColor, colors } = props;
  const [currentColor, setCurrentColor] = React.useState("purple");
  const [newColorName, setNewColorName] = React.useState("");

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor);
  };

  const handleSubmit = () => {
    addNewColor({ name: newColorName, color: currentColor });
    setNewColorName("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(
        ({ color }) => color.toLowerCase() !== currentColor.toLowerCase()
      );
    });
  });

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={(color) => updateCurrentColor(color.hex)}
      />

      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          name="newColorName"
          onChange={(evt) => setNewColorName(evt.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Color name is required",
            "Color name must be unique",
            "Color must be unique",
          ]}
        />

        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull ? "lightgrey" : currentColor,
          }}
          type="submit"
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}
