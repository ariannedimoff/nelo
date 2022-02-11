import React, { useState } from "react";
import { Dialog, Tooltip } from "@mui/material";
import NewEventForm from "./NewEventForm";

const DayCard = (props) => {
  const { enabled, day, fullDate, events, setEvents } = props;

  const [open, setOpen] = useState(false);

  const cardStyles = {
    height: "150px",
    width: "150px",
    border: "1px solid black",
    padding: "8px",
    textAlign: "right",
  };

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
    <div
      className="card"
      id={`enabled-${enabled}`}
      style={cardStyles}
      onDoubleClick={() => openModal()}
    >
      <div>
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
            top: 170,
            m: 0,
            borderRadius: "8px",
            width: "52%",
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
