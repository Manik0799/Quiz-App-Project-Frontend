import { FormatBold } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import TextInput from "../../textinput/textinput";
import { AccountContext } from "./account-context";
import classes from "./formStyles.module.css";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import Select, {SelectChangeEvent} from "@mui/material/Select";

const defaultValues = {
  fullname: null,
  email: null,
  roll_no: null,
  password: null,
  confirm_password: null,
  role: 'Select Role',
};

const Signup = () => {
  const { switchToSignin } = useContext(AccountContext);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    roll_no: "",
    password: "",
    confirm_password: "",
    role: "teacher",
  });

  // console.log("default", formValues)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRoleChange = (event) => {
    setFormValues({
      ...formValues,
      role: event.target.value
    });
      // console.log("roleChange", formValues);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    if (formValues.role === "student") {
      let payload = {
        name: formValues.fullname,
        roll_no: formValues.roll_no,
        email: formValues.email,
        password: formValues.password,
      };

      let response = await axios({
        method: "post",
        url: "http://localhost:8000/student",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response.data);
    } else if (formValues.role === "teacher") {
      let payload = {
        name: formValues.fullname,
        email: formValues.email,
        password: formValues.password,
      };

      let response = await axios({
        method: "post",
        url: "http://localhost:8000/teacher",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response.data);
      if(response.data){
        alert(response.data.message)
      }
    }

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer} onSubmit={handleSubmit}>
          <div className={classes.formWrapper}>
            <TextInput
              className={classes.inputField}
              placeholder="Enter Full Name"
              type="text"
              icon="person"
              name="fullname"
              value={formValues.fullname}
              onChange={handleInputChange}
            />
            <TextInput
              className={classes.inputField}
              placeholder="Enter email"
              type="email"
              icon="alternate_email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <Box>
              <Select
                // className={classes.inputField}
                // labelId="demo-simple-select-label"
                id="role-select"
                value={formValues.role}
                label="Select Role"
                onChange={handleRoleChange}
              >
                {console.log("select", formValues.role)}
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="teacher">Teacher</MenuItem>
              </Select>
            </Box>

            {formValues.role == "student" ? (
              <TextInput
                className={classes.inputField}
                placeholder="Enter Roll No"
                type="text"
                icon="person"
                name="roll_no"
                value={formValues.roll_no}
                onChange={handleInputChange}
              />
            ) : null}
          </div>

          <div className={classes.formWrapperRow}>
            <TextInput
              className={classes.inputField}
              type="password"
              name="password"
              placeholder="Enter password"
              icon="lock"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <TextInput
              className={classes.inputField}
              placeholder="Confirm password"
              type="password"
              name="confirm_password"
              icon="lock_clock"
              value={formValues.confirm_password}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit">Signup</button>
          </div>
          <span className={classes.mutedLink}>
            Already have an account?
            <span className={classes.boldLink} onClick={switchToSignin}>
              Signin
            </span>
            instead.
          </span>
        </div>
      </form>
    </>
  );
};

export default Signup;
