import React, { useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Day = (props) => {
  const dayStyles = {
    height: "150px",
    border: "1px solid black",
    margin: "0",
    textAlign: "right",
  };

  const { date, enabled } = props;
  const { title, setTitle } = useState("");
  const { description, setDescription } = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = (enabled) => {
    if (enabled) setOpen(true);
  };

  const event = {
    label: "New Event",
    title: title,
    description: description,
  };

  return (
    <div className="day" id={`enabled-${enabled}`} style={dayStyles}>
      <div
        onClick={() => {
          openModal(enabled);
        }}
        style={{ height: "100%", padding: "10px" }}
      >
        {date}
      </div>
      <Dialog
        PaperProps={{ sx: { position: "fixed", top: 10, left: 10, m: 0 } }}
        open={open}
        fullWidth
        onClose={handleClose}
      >
        <Box p={2}>
          <h5 style={{ fontWeight: "bold" }}>New Event</h5>
          <TextField
            label="Title"
            fullWidth
            required
            style={{ marginTop: "15px" }}
          ></TextField>
          <TextField
            label="Description"
            fullWidth
            required
            style={{ marginTop: "15px" }}
          ></TextField>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}
            style={{ marginTop: "15px" }}
          >
            SAVE
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default Day;
