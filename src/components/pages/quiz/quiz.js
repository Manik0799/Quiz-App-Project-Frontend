import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import axios from "axios";
import { fetchToken } from "../../../Auth";

export default function Quiz() {

  const {state} = useLocation();
  const {quizData} = state;


  if (screenfull.isEnabled) {
    screenfull.request();

    // screenfull.on("error", (event) => {
    //   console.error("Failed to enable fullscreen", event);
    //   alert('Failed to enable fullscreen');
    // });
    screenfull.on('error', () => {
      localStorage.removeItem('userToken');
      navigate('/');
    })
  }

  let max = quizData.no_of_questions;
  let min = 0;
  // console.log("===max , no of ques", max);
  // const [currentQuestion, setCurrentQuestion] = useState(Math.floor(Math.random() * max));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [answers, setAnswers] = useState([])
  const [base64_string, setBase64String] = useState()
  // let show = showScore;

  const handleNextQuestion = () => {
    const Next = currentQuestion + 1;
    setCurrentQuestion(Next);
    setQuestionCount(questionCount + 1);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // return <Navigate to="/score-page" />;
    // setShowScore(true);

    const api_payload = {
      quiz_id : quizData._id,
      course_id : quizData.course_id,
      answers : answers
    }

    const token = fetchToken();
    let authHeader = "bearer " + token;

    const response = await axios(
                {
                  method : "post",
                  url : "http://localhost:8000/quiz/submit-quiz",
                  data : api_payload,
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );
      
    
    
    navigate('/score-page', {state: {score: response.data.total_marks}});
  };


  const handleBase64String = (imageSrc) => {
    setBase64String(imageSrc)
    console.log('base', base64_string)
  }
  const handleAnswerClick = (question_id, isCorrect) => {
    let new_answer = {
      question_id : question_id,
      marked_option_id : parseInt(isCorrect)
    }

    setAnswers([...answers, new_answer])
    // console.log(answers)

    if (isCorrect === quizData.questions[currentQuestion].correct_option_id){
      setScore(score + quizData.questions[currentQuestion].max_marks);
      console.log(score)
    }
  };

  return (
    <>
      <div className={classes.timerContainer}>
        <h3>Time Remaining: </h3>
        <Timer />
        <span className="material-icons-outlined">timer</span>
      </div>
      <div className={classes.camWrapper}>
        <WebCam handleString = {handleBase64String}/>
      </div>

      <Marginer direction="vertical" margin={15} />

      <h1>{quizData.questions[currentQuestion].question}</h1>
      <div className={classes.answers}>

        {quizData.questions[currentQuestion].options.map((ans, idx) => {
          return (
            <form>
            <Checkbox
              className={classes.answer}
              key={ans.description}
              // id = {ans.option_id}
              // value={ans.description}
              // name={ans.description}
              text={ans.description}
              onClick={(e) => handleAnswerClick(quizData.questions[currentQuestion].question_id, ans.option_id)}
            />
            </form>
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
