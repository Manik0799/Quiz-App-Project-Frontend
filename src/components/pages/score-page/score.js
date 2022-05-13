import React, { useState } from "react";
import { Link } from 'react-router-dom'
import classes from "./score.module.css";
import QuestionData from "../../questions/questions.json";
import { Marginer } from "../../marginer/marginer";
import successImage from "../../../assests/images/success.png";
import Question from "../../questions/question";
import {useLocation} from 'react-router-dom';
import StyledButton from "../../ui-elements/button/button";

function Score(props) {
  // const [showScore, setShowScore] = useState(false);

  const state = useLocation();
  // console.log(state);

// console.log("===score props", props.score);
  return (
    <>
            <Marginer direction = "vertical" margin = {80} />

    <div className={classes.summary}>

      <div className={classes.point}>
        <p className={classes.score}>
          Your score is {state.state.score} out of {QuestionData.total_marks}
        </p>
        <Link to='/student-landing-page'>
        <StyledButton >
          Go To Home
        </StyledButton>
      </Link>
      </div>

      <div className={classes.badge}>
        <img src={successImage} alt="Success" />
      </div>

     
    </div>
    </>
  );
}

export default Score;
