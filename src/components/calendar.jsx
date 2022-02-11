import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import WeekdayNames from "./WeekdayNames";
import Month from "./Month";
import { formatDate, now } from "../helpers/CalendarHelpers";

const Calendar = () => {
  const [date, setDate] = useState(now());
  const [events, setEvents] = useState({});

  const calendarStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
  };

  const changeDate = (n) => {
    const newDate = formatDate(moment(date).add(n, "M"));
    setDate(newDate);
  };

  const resetDate = () => {
    setDate(now());
  };

  return (
    <div className="calendar-wrapper">
      <CalendarHeader date={date} resetDate={resetDate} />
      <div className="calendar" style={calendarStyles}>
        <button
          onClick={() => {
            changeDate(-1);
          }}
        >
          Previous
        </button>
        <div className="container">
          <WeekdayNames />
          <Month date={date} events={events} setEvents={setEvents} />
        </div>
        <button
          onClick={() => {
            changeDate(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Calendar;
