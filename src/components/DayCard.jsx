import React, { useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Event from './Event';

const DayCard = (props) => {
  const cardStyles = {
    height: "150px",
    border: "1px solid black",
    margin: "0",
    textAlign: "right",
  };

  const { enabled, day, fullDate, events, setEvents } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openModal = (enabled) => {
    if (enabled) setOpen(true);
  };

  const getEvents = () => {
    return events[fullDate] ? events[fullDate] : null;
  }

  const handleSubmit = () => {
    const newEvent = { title: title, description: description };
    const dailyEvents = events[fullDate] || [];
    dailyEvents.push(newEvent);
    events[fullDate] = dailyEvents;
    setEvents(events);
    setOpen(false);
  };

  return (
    <div className="card" id={`enabled-${enabled}`} style={cardStyles}>
      <div
        onDoubleClick={() => {
          openModal(enabled);
        }}
        style={{ height: "100%", padding: "10px" }}
      >
        {day}
        {getEvents()?.map((events, i) => (
          <ul style={{textAlign: 'left'}}key={i}>{events.title}</ul>
        ))}
      </div>
      <Dialog
        PaperProps={{
          sx: {
            position: "fixed",
            top: 160,
            m: 0,
            borderRadius: "8px",
            width: "50%",
          },
        }}
        maxWidth="true"
        open={open}
        onClose={() => setOpen(false)}
      >
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
            onClick={handleSubmit}
            style={{ marginTop: "15px" }}
          >
            SAVE
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default DayCard;
