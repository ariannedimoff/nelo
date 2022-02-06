import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { TextField } from "@mui/material";

const Modal = ({ visible, toggle, data }) => {
  const {
    label,
    title,
    details
  } = data;
  return visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h3>{label}</h3>
            </div>
            <div className="modal-content">
              
            </div>
          </div>
          <div className="modal-background" onClick={toggle}></div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;