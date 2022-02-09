import React from "react";

const CalendarHeader = ({ date, resetDate }) => {
  const styles = {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: '0.5rem'
  };


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
