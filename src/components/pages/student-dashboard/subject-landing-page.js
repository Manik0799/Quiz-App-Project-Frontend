import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Marginer } from "../../marginer/marginer";
import StyledButton from "../../ui-elements/button/button";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import classes from "./subject-landing-page.module.css";
import { fetchToken } from "../../../Auth";
import axios from "axios";
import QuizCard from "../../ui-elements/card/quizCard";
import JoinQuizModal from "../../modal-dialog/join-quiz-modal";

function SubjectPage(props) {
  const { state } = useLocation();
  // const { courseList } = state;
  console.log(state);
  const { courses } = state;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {

        const token = fetchToken();
        let authHeader = "bearer " + token
        
        const fetchData = async () => {

          const API_URL = "http://localhost:8000/student-given-quizzes/" + courses._id;
            try {
              const response = await axios(
                {
                  method : "get",
                  url : API_URL,
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );
              
              // console.log(response.data)
              setQuizzes(response.data)
                
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    const handleClickOpen = () => {
      setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  };



  const handleArrowClick = () => {
    console.log('arrow click')
  }

  return (
    <>
      <div className={classes.heading}>
        <h4
          style={{
            color: "var(--fontPrimary)",
            borderColor: "#002333",
            fontSize: "20px",
          }}
        >
          {/* {console.log('props from subject page: ', props.course_code)} */}
          {courses.course_code} | {courses.course_name}
        </h4>
        {/* <span> */}
        {/* <h4
          style={{
            color: "var(--fontPrimary)",
            borderColor: "#002333",
            fontSize: "20px",
          }}
        >
          B.Tech CSE 8th Sem
        </h4> */}
        {/* </span> */}
      </div>
      {/* <div className={classes.subHeading}> */}
      {/* <h4>B.Tech CSE 8th Sem &emsp; &emsp; {props.teacher}</h4> */}
      <h4>{courses.creator_name}</h4>
      {/* </div> */}
      {/* <Marginer direction="vertical" margin={20} /> */}
      {/* <div className={classes.analysis}>
        <div className={classes.all}>
          <h3>All Quizzes</h3>
          <Marginer direction="horizontal" margin={2} />
          <Link to="/analysis-page" className="material-icons-outlined">
            assessment
          </Link>
        </div>
      </div> */}

      <div className={classes.next}>
        {modalOpen && (
          <JoinQuizModal
            openHandler={handleClickOpen}
            closeHandler={handleClose}
          />
        )}
        <div className={classes.upcoming}>
          <Marginer direction="vertical" margin={10} />
          {/* <Link to="/start-quiz-page"> */}
          <StyledButton onClick={handleClickOpen}>
            Start a New Quiz
            <span className="material-icons-outlined">arrow_forward</span>
          </StyledButton>
          {/* </Link> */}

          <Marginer direction="vertical" margin={25} />

          <h3>All Quizzes</h3>
          <Marginer direction="vertical" margin={30} />

          <div className={classes.allQuiz}>
            {quizzes.map((quiz) => {
              return (
                <>
                <Marginer direction="vertical" margin={30} />
                <QuizCard data={quiz} />
                </>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubjectPage;
