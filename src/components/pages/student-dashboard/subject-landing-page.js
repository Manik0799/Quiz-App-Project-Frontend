import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Marginer } from "../../marginer/marginer";
import StyledButton from "../../ui-elements/button/button";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import classes from "./subject-landing-page.module.css";

function SubjectPage(props) {
  const { state } = useLocation();
  // const { courseList } = state;
  console.log(state);
  const { courses } = state;

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
        {/* <div className={classes.upcoming}>
          <h3>Upcoming Quiz</h3>
          <Marginer direction="vertical" margin={10} />
          <Link to="/start-quiz-page">
            <StyledButton>
              Quiz-4
              <span className="material-icons-outlined">arrow_forward</span>
            </StyledButton>
          </Link>
        </div> */}
        <div className={classes.upcoming}>
          <h3>All Quizzes</h3>
          <Marginer direction="vertical" margin={30} />
          {/* {props.quizzes.map((quiz) => {
            console.log('done quiz', quiz)
            // <Link to="/analysis-page">
            //   <StyledButton>
            //     Quiz-{quiz}
            //     <span className="material-icons-outlined">assessment</span>
            //   </StyledButton>
            // </Link>
          })} */}
          <div className={classes.allQuiz}>
            {/* <Link to="/analysis-page"> */}
              <StyledButton>
                Quiz-2
                <span className="material-icons-outlined" onClick={handleArrowClick}>arrow_forward</span>
              </StyledButton>
            {/* </Link> */}
            <Marginer direction="vertical" margin={10} />
            {/* <Link to="/analysis-page"> */}
              <StyledButton>
                Quiz-3
                <span className="material-icons-outlined" onClick={handleArrowClick}>arrow_forward</span>
               </StyledButton> 
           {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubjectPage;
