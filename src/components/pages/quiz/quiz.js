import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Answers from "../../answers/answers";
import { Marginer } from "../../marginer/marginer";
import Timer from "../../timer/timer";
import ProgressBar from "../../ui-elements/progress-bar/progressbar";
import screenfull from "screenfull";
import QuestionData from "../../questions/questions.json";
import Score from "../score-page/score";
import classes from "./quiz.module.css";
import Checkbox from "../../ui-elements/checkbox/checkbox";
import StyledButton from "../../ui-elements/button/button";
import WebCam from "../../webcam/webcam";

export default function Quiz() {
  if (screenfull.isEnabled) {
    screenfull.request();

    // screenfull.on("error", (event) => {
    //   console.error("Failed to enable fullscreen", event);
    //   alert('Failed to enable fullscreen');
    // });
  }

  let max = QuestionData.no_of_questions;
  let min = 0;
  console.log("===max , no of ques", max);
  // const [currentQuestion, setCurrentQuestion] = useState(Math.floor(Math.random() * max));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // let show = showScore;

  const handleNextQuestion = () => {
    const Next = currentQuestion + 1;
    setCurrentQuestion(Next);
    setQuestionCount(questionCount + 1);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // return <Navigate to="/score-page" />;
    // setShowScore(true);
    navigate('/score-page', {state: {score: score}});
  };
  console.log("setshowscore", showScore);


  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === QuestionData.questions[currentQuestion].correct_option_id)
      setScore(score + QuestionData.questions[currentQuestion].max_marks);
  };

  return (
    <>
      <div className={classes.timerContainer}>
        <h3>Time Remaining: </h3>
        <Timer />
        <span className="material-icons-outlined">timer</span>
      </div>
      <div className={classes.camWrapper}>
        <WebCam />
      </div>

      <Marginer direction="vertical" margin={15} />
      {/* <h1>Why is the weather so hot? 🥵</h1> */}
      <h1>{QuestionData.questions[currentQuestion].question}</h1>
      <h4>Question can have multiple answers...</h4>
      {/*dont show this under every question, instead keep under instructions*/}
      <div className={classes.answers}>
        {QuestionData.questions[currentQuestion].options.map((ans, idx) => {
          return (
            <Checkbox
              className={classes.answer}
              key={ans.description}
              // value={ans.description}
              // name={ans.description}
              text={ans.description}
              onClick={(e) => handleAnswerClick(ans.option_id)}
            />
          );
        })}
      </div>
      {/* <Answers currentQuestion={currentQuestion} /> */}
      {/* <ProgressBar nextQuestion={currentQuestion} /> */}
      {/* Score#: {score} out of {QuestionData.total_marks} send score to <Score /> */}

      <Marginer direction="vertical" margin={30} />
      <div className={classes.nextButton}>
        {/* <Link to="/quiz-page"> */}
        {console.log("===count", questionCount)}
        {questionCount === max - 1 ? (
          // <Link to="/score-page">
          <StyledButton
            className={classes.next}
            // routing to score-page
            // setShowScore(true)
            // onClick={() => setShowScore(true)}
            onClick={handleSubmit}
          >
            Submit Quiz
          </StyledButton>
        ) : (
          // </Link>
          <StyledButton className={classes.next} onClick={handleNextQuestion}>
            Next Question
            <span className="material-icons-outlined">arrow_forward</span>
          </StyledButton>
        )}
      </div>

      {console.log("quiz showScore: ", showScore, score)}
      {showScore && <Score score={score} />}
    </>
  );
}
