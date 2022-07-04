import React, { useState } from "react";
import "../App.css";
import CreateDriver from "./CreateDriver";
import ChangePassword from "./ChangePassword";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretRight } from '@fortawesome/free-solid-svg-icons'



const Admin = () => {
  const [content, setContent] = useState("createDriver");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-2 left">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("createDriver");
            }}
          >
            Create Driver
            <span><FontAwesomeIcon icon={faCaretRight} className="arrow-icon" /></span>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("changePassword");
            }}
          >
            Change Password
            <span><FontAwesomeIcon icon={faCaretRight} className="arrow-icon" /></span>
          </button>
          <button className="btn btn-secondary">Create Driver</button>
        </div>
        <div className="col col-10">
          {content === "createDriver" && <CreateDriver />}
          {content === "changePassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
