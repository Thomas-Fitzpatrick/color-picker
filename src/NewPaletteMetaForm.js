import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function NewPaletteMetaForm(props) {
  const [newPaletteName, setNewPaletteName] = React.useState("");
  const [stage, setStage] = React.useState("form");

  const handleChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = (emoji) => {
    props.handleSubmit({ paletteName: newPaletteName, emoji: emoji.native });
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={props.hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        aria-labelledby="form-dialog-title"
        onClose={props.hideForm}
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your beautiful new palette. Make sure it's
              unique!
            </DialogContentText>

            <TextValidator
              label="New Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              fullWidth
              margin="normal"
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette name already in use",
              ]}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={props.hideForm} color="primary">
              Cancel
            </Button>

            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
