import React, { useState } from "react";
import Login from "./login";
import Signup from './signup';
import { motion } from "framer-motion";
import axios from "axios";

import classes from "./account-box.module.css";
import { AccountContext } from "./account-context";

function AccountBox() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const [responseData, setResponseData] = useState();

  const backdropVariants = {
    expanded: {
      width: "152%",
      height: "1150px",
      borderRadius: "20%",
      transform: "rotate(3deg)",
    },
    collapsed: {
      width: "152%",
      height: "565px",
      borderRadius: "50%",
      transform: "rotate(3deg)",
    },
  };

  const expandingTransition = {
    type: "spring",
    duration: 2.2,
    stiffness: 30,
  };

  const expandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 300);
  };

  const switchToSignin = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 300);
  };

  const contextValue = { switchToSignup, switchToSignin };


  // const getRes = async () => {
  //   let response = await axios.get(
  //     "http://localhost:8000/course/627369626075c5090bd9c49d"
  //   );
  //   console.log(response);
  // }
  
  return ( 
    <>
    {/* <button onClick={getRes}>click me</button> */}
    <AccountContext.Provider value={contextValue}>
    <div className={classes.boxContainer}>
      <div className={classes.topContainer}>
        <motion.div
          animate={expanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
          className={classes.backdrop}
        />
        {active === 'signin' && <div className={classes.headerContainer}>
          <h2>Welcome</h2>
          <h5>Please sign-in to continue!</h5>
        </div>}
        {active === 'signup' && <div className={classes.headerContainer}>
          <h2>Create Your Account</h2>
          <h5>Please sign-up to continue!</h5>
        </div>}
      </div>
      <div className={classes.innerContainer}>
        {active === 'signin' && <Login/>}
        {active === 'signup' && <Signup/>}
      </div>
    </div>
    </AccountContext.Provider>

    </>
  );
}

export default AccountBox;
