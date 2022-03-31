import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../textinput/textinput";
import { AccountContext } from "./account-context";

import classes from "./formStyles.module.css";

function Login() {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <TextInput
            className={classes.inputField}
            placeholder="Enter email"
            type="email"
            icon="alternate_email"
          />
          <TextInput
            className={classes.inputField}
            type="password"
            placeholder="Enter password"
            icon="lock"
          />
        </div>
        <Link to='/reset-password' className={classes.mutedLink}>
          Forget your password?
        </Link>
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
    </>
  );
}

export default Login;
