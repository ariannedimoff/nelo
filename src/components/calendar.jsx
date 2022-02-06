import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import WeekdayNames from "./WeekdayNames";
import Weeks from "./Weeks";

const Calendar = () => {
  const calendarStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const containerStyles = {
    display: 'flex',
    margin: 'auto',
    alignSelf: 'center',
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
    <div className="calendar" style={calendarStyles}>
      <CalendarHeader date={date}/>
      <div className="container" style={containerStyles}>
        <div className='button-wrapper' style={{width: 'auto'}}>
          <button
            onClick={() => {
              changeDate(-1);
            }}
          >Previous</button>
        </div>
        <div
          className="calendar-wrapper"
          style={{padding: '0 8vw 0 8vw'}}
        >
          <WeekdayNames />
          <Weeks date={date} />
        </div>
        <div className='button-wrapper'>
          <button
            onClick={() => {
              changeDate(-1);
            }}
          >Next</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
