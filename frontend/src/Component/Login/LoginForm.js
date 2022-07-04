import React from "react";
import { useFormik } from "formik";

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
          phone: "",
          password: ""
        },
    
        onSubmit: (values) => {
          if(props.value === "driver"){
              console.log("driver")
              console.log(values)
             }
             else{
                 console.log('Admin')
             }
        },
    
        validate: (values) => {
          let errors = {};
          if (!values.phone) errors.phone = "Required";
          if(values.phone.length !== 10  ) errors.phone = "Phone number is must 10 digite";
          // check the input contain only numbers
          let isnum = /^\d+$/.test(values.phone)
          if(!isnum) errors.phone = "Enter only numbers"

          if (values.password.length <= 3) errors.password = "give more than three letters";
          return errors;
        }
      });

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">{props.value === 'driver' ? "Driver Login" : "Admin Login"}</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="box">
              <label>PhoneNo : </label>
              <input
                id="phone"
                name="phone"
                type= 'text'
                onChange={formik.handleChange}
                value={formik.values.phone}
                required
              ></input>
              {formik.errors.phone ? <div className="warning">{"* "+formik.errors.phone}</div> : null}
            </div>
            
            <div className="box">
              <label>Password : </label>
              <input

                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></input>
              {formik.errors.password ? <div className="warning">{"* "+formik.errors.password}</div> : null}
            </div>
            
            <div className="box">
              <input type="submit" value="Login" ></input>
            </div>
        </form>
        </div>
        </div>
    )
}

export default LoginForm