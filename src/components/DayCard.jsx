import React, { useState } from "react";

import { Button, Dialog, TextField, Tooltip } from "@mui/material";

import NewEventForm from './NewEventForm';


const DayCard = (props) => {
  const { enabled, day, fullDate, events, setEvents } = props;
  
  const [open, setOpen] = useState(false);
 

  const cardStyles = {
    height: "150px",
    border: "1px solid black",
    margin: "0",
    textAlign: "right",
  };

  const modalStyles = { height: "100%", padding: "10px" }


  const openModal = () => {
    if (enabled) setOpen(true);
  };

  const getEvents = () => {
    return events && events[fullDate] ? events[fullDate] : null;
  };

  const handleSubmit = (newEvent) => {
    const dailyEvents = events[fullDate] || [];
    dailyEvents.push(newEvent);
    events[fullDate] = dailyEvents;
    setEvents(events);
    setOpen(false);
  };

  return (
    <div className="card" id={`enabled-${enabled}`} style={cardStyles} onDoubleClick={() => openModal()}>
      <div
        style={{ height: "100%", padding: "10px" }}
      >
        {day}
        {getEvents()?.map((events, i) => (
          <Tooltip key={i} title={events.description} placement="top">
            <ul className="event" style={{ textAlign: "left" }}>
              {events.title}
            </ul>
          </Tooltip>
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
        <NewEventForm handleSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
};

export default DayCard;
