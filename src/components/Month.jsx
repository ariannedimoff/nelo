import React from "react";
import DayCard from "./DayCard";
import {
  daysInMonth,
  daysInPreviousMonth,
  daysInNextMonth,
} from "../helpers/CalendarHelpers";

const Month = (props) => {
  const { date, events, setEvents } = props;

  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    width: "66vw",
  };

  return (
    <div>
      <div className="month" style={styles}>
        {daysInPreviousMonth(date).map((day, i) => (
          <DayCard
            key={i}
            fullDate={`${day} ${date}`}
            day={day}
            events={null}
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
            events={null}
            setEvents={setEvents}
            enabled={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
