import React from "react";

const CalendarHeader = (props) => {
  const styles = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const { date, resetDate } = props;
  console.log("date", date)

  return (
    <div className="calendar-header" style={styles}>
      <h3>
        {date}
      </h3>
      <button
        onClick={() => {
          resetDate();
        }}
      >
        Today
      </button>
    </div>
  );
};

export default CalendarHeader;
