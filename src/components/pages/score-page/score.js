import React, { useState } from "react";
import classes from "./score.module.css";
import QuestionData from "../../questions/questions.json";
import { Marginer } from "../../marginer/marginer";
import successImage from "../../../assests/images/success.png";
import Question from "../../questions/question";

function Score(props) {
  const [showScore, setShowScore] = useState(false);
console.log("===score props", props.score);
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />{props.score} out of {QuestionData.total_marks}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={successImage} alt="Success" />
      </div>

      {/* <div className={classes.analysis}> 
        <h1>Questions Analysis</h1>
        <Question />
      </div> */}
    </div>
  );
}

export default Score;
