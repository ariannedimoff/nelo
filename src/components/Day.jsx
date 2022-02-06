import React from 'react';
import Modal from "./Modal/Modal";
import useModal from "./Modal/useModal";

const Day = (props) => {
  const dayStyles = {
    height: "150px",
    border: "1px solid black",
    padding: "10px",
    margin: "0",
    textAlign: "right",
  };

  const { date, enabled } = props;
  const { toggle, visible } = useModal();


  const openModal = (enabled) => {
    if (enabled) toggle(); 
  };


  return (
    <div
      className="day"
      id={`enabled-${enabled}`}
      style={dayStyles}
      onClick={() => {
        openModal(enabled);
      }}
    >
      {date}
      <Modal toggle={toggle} visible={visible} data={"Hello"}/>
    </div>
  );
};

export default Day;
