import React, { useContext } from "react";
import TextInput from "../../textinput/textinput";
import { AccountContext } from "./account-context";
import classes from "./formStyles.module.css";

function Signup() {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <TextInput
            className={classes.inputField}
            placeholder="Enter Full Name"
            type="text"
            icon="person"
          />
          <TextInput
            className={classes.inputField}
            placeholder="Enter email"
            type="email"
            icon="alternate_email"
          />
        </div>
        <div className={classes.formWrapperRow}>
          <TextInput
            className={classes.inputField}
            type="password"
            placeholder="Enter password"
            icon="lock"
          />
          <TextInput
            className={classes.inputField}
            placeholder="Confirm password"
            type="password"
            icon="lock_clock"
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
    </>
  );
}

export default Signup;
