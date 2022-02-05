import React from "react";
import WeekDays from "./weekDays";
import Days from "./days";

const Calendar = (props) => {
  const styles = {};

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
  };

  const { date, setDate, formatDate } = props;

  const changeDate = (date, n) => {
    let newDate = new Date(date);
    newDate = formatDate(new Date(newDate.setMonth(newDate.getMonth()+n)))
    setDate(newDate)
  };

  return (
    <div className="calendar" style={styles}>
      <WeekDays />
      <div className="container" style={containerStyles}>
        <button onClick={() => {changeDate(date, -1)}}>Previous</button>
        <Days />
        <button onClick={() => {changeDate(date, 1)}}>Next</button>
      </div>
    </div>
  );
};

export default Calendar;
