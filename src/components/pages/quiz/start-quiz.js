import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Marginer } from "../../marginer/marginer";
import ModalDialogs from "../../modal-dialog/modal-dialog";
import StyledButton from "../../ui-elements/button/button";
import classes from "./start-quiz.module.css";
import axios from "axios";

const defaultValues = {
    _id: null,
    course_id: null,
    no_of_questions: null,
    start_time: null,
    duration: null,
    questions: null,
    end_time: null,
    total_marks: null,
    created_at: null
}

function StartQuiz() {

  const { state } = useLocation();
  const { quizId } = state;
  const [modalOpen, setModalOpen] = useState(false);

  const [quizData, setQuizData] = useState({})

   useEffect(() => {

        const fetchData = () => {
          const API_URL = "http://localhost:8000/quiz/" + quizId;

          axios.get(API_URL).then((response) => {
        
            console.log(response.data);
            setQuizData(response.data)
            // console.log(quizData)

        });
          
        };

        fetchData();
    }, []);


  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setModalOpen(false);
    }
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <>
      <div className={classes.heading}>
        {/*required for finite borderBottom */}
        <h4
          style={{
            color: "var(--fontPrimary)",
            borderColor: "#002333",
            fontSize: "20px",
          }}
        >
          {/* CSPC-402 | System Programming and Compiler Design */}
        </h4>
      </div>
      <div className={classes.heading}>
        {/* <h4>QUIZ - 4</h4> */}
      </div>
      {modalOpen && (
        <ModalDialogs
          open={modalOpen}
          close={handleClose}
          hideBackdrop={true}
          title="Continue?"
          button1="Agree"
          bulletList1="The next page will open on fullscreen."
          bulletList2="Camera access will be prompted."
          bulletList3="If you exit the fullscreen, the quiz will be auto submitted."
        />
      )}
      <Marginer direction="vertical" margin={15} />
      <div className={classes.aboutQuiz}>
        <div className={classes.details}>
          <h2>Start Time : 123</h2>
          <Marginer direction="vertical" margin={10} />
          <h2>End Time : 1234</h2>
          <Marginer direction="vertical" margin={10} />
          <h2>No. of Questions : XYZ</h2>
          <Marginer direction="vertical" margin={25} />
          {/* <Link to="/quiz-page"> */}
          <StyledButton onClick={handleConfirmation}>Start Quiz</StyledButton>
          {/* </Link> */}
        </div>

        <div className={classes.info}>
          <h2>Instructions</h2>
          <Marginer direction="vertical" margin={15} />
          <p>
            This quiz consists of 20 multiple-choice questions. It will also be
          </p>
          <p>
            extremely useful to study the key terms at the end of the chapter
          </p>
          <p>and review the activity at the end of the chapter.</p>
          <Marginer direction="vertical" margin={15} />
          <ul>
            <li>
              <strong>Multiple Attempts</strong> - You will have three attempts
              for this quiz
              <br />
              with your highest score being recorded in the grade book.
            </li>
            <br />
            <li>
              <strong>Timing</strong> - You will need to complete each of your
              attempts in one
              <br />
              sitting, as you are allotted 30 minutes to complete each attempt
            </li>
          </ul>
          <Marginer direction="vertical" margin={25} />
          <p>
            To start, click the <strong>"Take the Quiz"</strong> button.
          </p>
          <p>
            When finished, click the <strong>"Submit Quiz"</strong> button.
          </p>
          <Marginer direction="vertical" margin={15} />
          <p>Only registered, enrolled users can take graded quizzes!</p>
        </div>
      </div>
    </>
  );
}

export default StartQuiz;
