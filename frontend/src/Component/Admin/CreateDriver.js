import React,{useState} from "react";

const CreateDriver = ()=>{

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [licenceNo, setLicenceNo] = useState("");
    const [status, setStatus] = useState("");
  
    const [checkEmail, setCheckEmail] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [warning, setWarning] = useState(false);
  
    const handleClick = async () => {
      if (email === "") setCheckEmail("email");
      else setCheckEmail("");
      if (password === "") setCheckPassword("password");
      else setCheckPassword("");
      if (email !== "" && password !== "" && password.length > 7) {
        if (
          fName !== "" &&
          lName !== "" &&
          imageUrl !== "" &&
          licenceNo !== "" &&
          status !== ""
        ) {
          console.log("clicked");
          
          // let res = await axios.post(
          //   "http://localhost:3001/createuser",
          //   JSON.stringify({
          //     fName: fName,
          //     lName: lName,
          //     email: email,
          //     password: password,
          //     licenceNo: licenceNo,
          //     imgUrl: imageUrl,
          //     status: status,
          //   }),
          //   {
          //     headers: {
          //       "Content-Type": "application/x-www-form-urlencoded",
          //     },
          //   }
          // );
          // if (res.data) {
          //   alert(res.data);
          // }
          // setWarning(false);
        } else setWarning(true);
      }
    };
  
  

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">Create Driver</h4>
          <form>
            <div className="box">
              <label>First Name : </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
              ></input>
            </div>
  
            <div className="box">
              <label>Last Name : </label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
              ></input>
            </div>
  
            <div className="box">
              <label>Email : </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              {checkEmail === "email" && (
                <p className="warning"> *Please Fill The Email</p>
              )}
            </div>
  
            <div className="box">
              <label>Password : </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (password.length < 7)
                    document.getElementById("validation").innerHTML =
                      "*Password must be 8 Characters";
                  else document.getElementById("validation").innerHTML = "";
                }}
                required
              ></input>
              <p id="validation" className="warning"></p>
              {checkPassword === "password" && (
                <p className="warning"> *Please Fill The Password</p>
              )}
            </div>
  
            <div className="box">
              <label>Image URL :</label>
              <input
                type="text"
                placeholder="Image URL"
                onChange={(e) => setImageUrl(e.target.value)}
                required
              ></input>
            </div>
  
            <div className="box">
              <label>Licence No : </label>
              <input
                type="text"
                id="birthday"
                name="birthday"
                onChange={(e) => setLicenceNo(e.target.value)}
                required
              ></input>
            </div>
  
            <div className="box">
              <label>Choose a Status:</label>
              <select
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option>Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
  
            <div className="box">
              {warning && (
                <h2 className="warning" id="">
                  {" "}
                  Fill the All feilds
                </h2>
              )}
              <input type="submit" value="Submit" onClick={handleClick}></input>
            </div>
          </form>
        </div>
      </div>
    )
}

export default CreateDriver;