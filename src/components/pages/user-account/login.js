import React, { useContext } from "react";
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
        <a href="#" className={classes.mutedLink}>
          Forget your password?
        </a>
        <div className={classes.buttonWrapper}>
          <button type="submit">Signin</button>
        </div>
        <a href="#" className={classes.mutedLink}>
          Don't have an account?
          <a
            href="#"
            className={classes.boldLink}
            onClick={switchToSignup}
          >
            Signup
          </a>
          instead.
        </a>
      </div>
    </>
  );
}

export default Login;
