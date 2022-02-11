import React from "react";
import moment from "moment";

const WeekdayNames = () => {
  const weekDays = moment.weekdays();

  const styles = {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    justifyContent: "space-around",
    width: "66vw",
    margin: "21px 0px 21px 0px",
  };

  return (
    <div style={styles}>
      {weekDays.map((day, i) => (
        <ul key={i}>{day}</ul>
      ))}
    </div>
  );
};

export default WeekdayNames;
