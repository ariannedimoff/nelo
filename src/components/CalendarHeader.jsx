import React from "react";

const CalendarHeader = ({ date, resetDate }) => {
  const styles = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className="calendar-header" style={styles}>
      <h3>{date}</h3>
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
