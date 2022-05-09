import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../textinput/textinput";
import { AccountContext } from "./account-context";
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import axios from "axios";
import {setToken, fetchToken} from "../../../Auth";
import {useNavigate} from "react-router-dom";


import classes from "./formStyles.module.css";

const defaultValues = {
  email : null,
  password : null
}

const Login = () => {
  const { switchToSignup } = useContext(AccountContext);

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultValues)
  const [error, setError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setError(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let payload = {
      email : formValues.email,
      password : formValues.password
    }


    let response = await axios({
        method : "post",
        url : "http://localhost:8000/login",
        data : payload,
        headers: {
                    'Content-Type': 'application/json'
                }
    })

    if(response.data.access_token){
      setToken(response.data.access_token);

      if(response.data.userType === "student"){
              navigate('/student-landing-page');
      }
      else if(response.data.userType === "teacher"){
        navigate('/teacher-landing-page');
      }
    } 
    else{
      setError(true)
    }

  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <TextInput
            className={classes.inputField}
            placeholder="Enter email"
            type="email"
            name = "email"
            value={formValues.email}
            onChange = {handleInputChange}
            icon="alternate_email"
          />
          <TextInput
            className={classes.inputField}
            type="password"
            placeholder="Enter password"
            icon="lock"
            name = "password"
            value={formValues.password}
            onChange = {handleInputChange}
          />
        </div>
        {/* <Link to='/reset-password' className={classes.mutedLink}>
          Forgot your password?
        </Link> */}
        <div className={classes.buttonWrapper}>
          <button type="submit">Signin</button>
        </div>
        <span className={classes.mutedLink}>
          Don't have an account?
          <span
            className={classes.boldLink}
            onClick={switchToSignup}
          >
            Signup
          </span>
          instead.
        </span>
      </div>
      </form>
      {error && 
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error"> Invalid Credentials</Alert>
      </Stack>
      }
    </>
  );
}

export default Login;
