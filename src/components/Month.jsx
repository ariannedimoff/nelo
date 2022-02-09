import React from "react";
import DayCard from "./DayCard";
import {
  daysInMonth,
  daysInPreviousMonth,
  daysInNextMonth,
} from "../helpers/CalendarHelpers";

const Month = (props) => {
  const { date, day, events, setEvents } = props;

  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    width: "70vw",
    margin: "auto",
    alignSelf: "center",
  };

  return (
    <div>
      <div className="month" style={styles}>
        {daysInPreviousMonth(date).map((day, i) => (
          <DayCard
            key={i}
            fullDate={`${day} ${date}`}
            day={day}
            events={events}
            setEvents={setEvents}
            enabled={false}
          />
        ))}
        {daysInMonth(date).map((day, i) => (
          <DayCard
            key={i}
            fullDate={`${day} ${date}`}
            day={day}
            events={events}
            setEvents={setEvents}
            enabled={true}
          />
        ))}
        {daysInNextMonth(date).map((day, i) => (
          <DayCard
            key={i}
            fullDate={`${day} ${date}`}
            day={day}
            events={events}
            setEvents={setEvents}
            enabled={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
