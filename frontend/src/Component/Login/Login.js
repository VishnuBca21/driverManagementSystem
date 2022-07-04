import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import LoginForm from "./LoginForm";

const Login = () => {
  const [content, setContent] = useState("Driver");
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-3 left">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("Driver");
            }}
          >
            Driver
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("Admin");
            }}
          >
            Admin
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>
        </div>
        <div className="col col-9 right">
          {content === "Driver" && <LoginForm 
              value = "driver"
          />}
          {content === "Admin" && <LoginForm 
              value = "admin"
          />}
        </div>
      </div>
    </div>
  );
};

export default Login;
