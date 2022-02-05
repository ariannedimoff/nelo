import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Calendar from "./components/calendar";

const App = () => {
  const formatDate = (dateObj) => {
    dateObj = new Date(dateObj)
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    return `${month} ${year}`;
  };

  const now = () => {
    return formatDate(Date.now());
  };

  const resetDate = () => {
    setDate(now())
  };
  
  const [date, setDate] = useState(now());

  return (
    <div className="App">
      <Header date={date} resetDate={resetDate}/>
      <Calendar date={date} setDate={setDate} formatDate={formatDate}/>
    </div>
  );
};

export default App;
