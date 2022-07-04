import React,{useState} from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");

    
  
    const [checkOldPassword, setCheckOldPassword] = useState("");
    const [checkNewPassword, setCheckNewPassword] = useState("");
    const [checkConformPassword, setCheckConformPassword] = useState("");
    const [match, setMatch] = useState()

    const handleClick = () => {
        let isEmpty = true

        if (oldPassword === "") {
            setCheckOldPassword("oldPassword")
        }
        else {
            setCheckOldPassword("")
            
        };
        if (newPassword === "") {
            setCheckNewPassword("newPassword")
        }
        else {
            setCheckNewPassword("");
            isEmpty = false;
        }
        if (conformPassword === "") {
            setCheckConformPassword("conformPassword")
        }
        else {
            setCheckConformPassword("");
            isEmpty = false;
        }
        if (newPassword === conformPassword &&  !isEmpty) {
            setMatch("match")
            
        }
        else {setMatch("notmatch");}


    }

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">Change Password</h4>
          <form>
            <div className="box">
              <label>Old Password : </label>
              <input
                type="text"
                placeholder="Old Password"
                onChange={(e) => {
                    setOldPassword(e.target.value)
                    if (oldPassword.length < 7)document.getElementById("old-validation").innerHTML ="*Password must be 8 Characters"

                    else document.getElementById("old-validation").innerHTML = "";
                    }}
                required
              ></input>
              <p id="old-validation" className="warning"></p>
              {checkOldPassword === "oldPassword" && (
                <p className="warning"> *Please Fill The Old Password</p>
              )}
              
              
            </div>
  
  
            <div className="box">
              <label>New Password : </label>
              <input
                type="password"
                placeholder="New Password "
                onChange={(e) => {
                    setNewPassword(e.target.value)
                    if (newPassword.length < 7)
                    document.getElementById("new-validation").innerHTML =
                      "*Password must be 8 Characters";
                    else document.getElementById("new-validation").innerHTML = "";
                    }}
                required
              ></input>
              <p id="new-validation" className="warning"></p>
              {checkNewPassword === "newPassword" && (
                <p className="warning"> *Please Fill The New Password</p>
              )}
            </div>
  
            <div className="box">
              <label>Conform Password : </label>
              <input
                type="password"
                placeholder="Conform Password"
                onChange={(e) => {
                  setConformPassword(e.target.value);
                  if (conformPassword.length < 7)
                    document.getElementById("conform-validation").innerHTML =
                      "*Password must be 8 Characters";
                  else document.getElementById("conform-validation").innerHTML = "";
                }}
                required
              ></input>
              <p id="conform-validation" className="warning"></p>
              {checkConformPassword === "conformPassword" && (
                <p className="warning"> *Please fill the Conform Password</p>
              )}
            </div>

            <div className="box">
              {/* {warning && (
                <h2 className="warning" id="">
                  {" "}
                  Fill the All feilds
                </h2>
              )} */}
              <input type="submit" value="Submit" onClick={handleClick}></input>
            </div>
            
            {match === "match" && <h1 style={{color: "green"}}>Password Matched</h1>}
            {match === "notmatch" && <h1 className="warning">Password Not Matched</h1>}
          </form>
        </div>
      </div>
    )

}

export default ChangePassword;