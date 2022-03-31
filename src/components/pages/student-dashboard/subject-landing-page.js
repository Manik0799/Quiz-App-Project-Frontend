import React from "react";
import { Link } from "react-router-dom";
import { Marginer } from "../../marginer/marginer";
import StyledButton from "../../ui-elements/button/button";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import classes from "./subject-landing-page.module.css";

function SubjectPage() {
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
          CSPC-402 | System Programming and Compiler Design
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
        <h4>B.Tech CSE 8th Sem &emsp; &emsp; Dr. KP Sharma</h4>
      {/* </div> */}
      <Marginer direction="vertical" margin={20} />
      <div className={classes.analysis}>
        <div className={classes.all}>
          <h3>All Quizzes</h3>
          <Marginer direction="horizontal" margin={2} />
          <Link to="/analysis-page" className="material-icons-outlined">
            assessment
          </Link>
        </div>
      </div>

      <div className={classes.next}>
        <div className={classes.upcoming}>
          <h3>Upcoming Quiz</h3>
          <Marginer direction="vertical" margin={10} />
          <Link to="/start-quiz-page">
            <StyledButton>
              Quiz-4
              <span className="material-icons-outlined">arrow_forward</span>
            </StyledButton>
          </Link>
        </div>
        <div className={classes.done}>
          <h3>Finished Quiz</h3>
          <Marginer direction="vertical" margin={10} />
          <Link to="/analysis-page">
            <StyledButton
            // endIcon={<AssessmentOutlinedIcon/>} mui icons with button
            // make button link to analysis page too
            >
              Quiz-1
              <span className="material-icons-outlined">assessment</span>
            </StyledButton>
          </Link>

          <Marginer direction="vertical" margin={10} />
          <Link to="/analysis-page">
            <StyledButton>
              Quiz-2
              <span className="material-icons-outlined">assessment</span>
            </StyledButton>
          </Link>

          <Marginer direction="vertical" margin={10} />
          <Link to="/analysis-page">
            <StyledButton>
              Quiz-3
              <span className="material-icons-outlined">assessment</span>
            </StyledButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SubjectPage;
