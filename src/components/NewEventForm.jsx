import React, { useState } from "react";

import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";


const NewEventForm = (props) => {

    const { handleSubmit } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        if (title.length && description.length) {
          handleSubmit({ title: title, description: description });
        }
      };


  return (
    <Box
      p={2}
      style={{
        border: "2px solid #3874cb",
        margin: "1px",
        borderRadius: "8px",
      }}
    >
      <h5 style={{ fontWeight: "bold" }}>New Event</h5>
      <TextField
        label="Title"
        fullWidth
        required
        style={{ marginTop: "15px" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></TextField>
      <TextField
        label="Description"
        fullWidth
        required
        style={{ marginTop: "15px" }}
        onChange={(e) => setDescription(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        fullWidth
        onClick={handleClick}
        style={{ marginTop: "15px" }}
      >
        SAVE
      </Button>
    </Box>
  );
};

export default NewEventForm;
