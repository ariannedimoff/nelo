import React from "react";
import moment from "moment";
import WeekdayNames from "./WeekdayNames";
import Day from "./Day";

const Weeks = (props) => {
  const { date } = props;

  const styles = {
    display: "grid",
    gridTemplateColumns: "150px 150px 150px 150px 150px 150px 150px",
    width: "fit-content",
    margin: "auto",
    alignSelf: "center",
  };

  const weekDays = moment.weekdays();

  const daysInMonth = () => {
    const n = moment(date).daysInMonth();
    return Array.from({ length: n }, (_, i) => i + 1);
  };

  const daysInPreviousMonth = () => {
    const firstDayInMonth = moment(date).startOf("M").format("dddd");
    const n = weekDays.indexOf(firstDayInMonth);
    const prevLength = moment(date).subtract(1, "M").daysInMonth();
    return Array.from({ length: prevLength }, (_, i) => i + 1).slice(
      prevLength - n
    );
  };

  const daysInNextMonth = () => {
    const lastDayInMonth = moment(date).endOf("M").format("dddd");
    const n = 7 - (weekDays.indexOf(lastDayInMonth) + 1);
    return Array.from({ length: n }, (_, i) => i + 1);
  };

  return (
    <div>
      <WeekdayNames />
      <div className="weeks" style={styles}>
        {daysInPreviousMonth().map((day, i) => (
          <Day key={i} date={day} enabled={false} />
        ))}
        {daysInMonth().map((day, i) => (
          <Day key={i} date={day} enabled={true}/>
        ))}
        {daysInNextMonth().map((day, i) => (
          <Day key={i} date={day} enabled={false} />
        ))}
      </div>
    </div>
  );
};

export default Weeks;
