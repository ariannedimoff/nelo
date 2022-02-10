import React, { useState } from "react";
import moment from "moment";
import { formatDate, now } from "../helpers/CalendarHelpers";
import CalendarHeader from "./CalendarHeader";
import WeekdayNames from "./WeekdayNames";
import Month from "./Month";

const Calendar = () => {
  const calendarStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const containerStyles = {
    display: "flex",
    margin: "auto",
    alignSelf: "center",
  };

  const [date, setDate] = useState(now());
  const [events, setEvents] = useState({});

  const changeDate = (n) => {
    const newDate = formatDate(moment(date).add(n, "M"));
    setDate(newDate);
  };

  const resetDate = () => {
    setDate(now());
  };

  return (
    <div className="calendar" style={calendarStyles}>
      <CalendarHeader date={date} resetDate={resetDate} />
      <div className="container" style={containerStyles}>
        <div className="button-wrapper" style={{ width: "auto" }}>
          <button
            onClick={() => {
              changeDate(-1);
            }}
          >
            Previous
          </button>
        </div>
        <div className="calendar-wrapper" style={{ padding: "0 8vw 0 8vw" }}>
          <WeekdayNames />
          <Month date={date} events={events} setEvents={setEvents} />
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => {
              changeDate(1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
