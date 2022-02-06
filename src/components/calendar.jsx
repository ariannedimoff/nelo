import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import Weeks from "./Weeks";

const Calendar = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
  };

  const now = () => {
    return formatDate(moment());
  };

  const formatDate = (date) => {
    date = moment(date);
    const month = date.format("MMMM");
    const year = date.year();
    return `${month} ${year}`;
  };

  const resetDate = () => {
    setDate(now());
  };

  const [date, setDate] = useState(now());

  const changeDate = (n) => {
    const newDate = formatDate(moment(date).add(n, "M"));
    setDate(newDate);
  };

  return (
    <div className="calendar">
      <CalendarHeader date={date} resetDate={resetDate} />
      <div className="container" style={containerStyles}>
        <button
          onClick={() => {
            changeDate(-1);
          }}
        >
          Previous
        </button>
        <Weeks date={date}></Weeks>
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
