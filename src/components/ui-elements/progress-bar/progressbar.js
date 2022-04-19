import { Link } from "react-router-dom";
import StyledButton from "../button/button";
import classes from "./progressbar.module.css";

export default function ProgressBar(props) {
  console.log('=== progressbar.js', props.currentQuestion);

  return (
    <div className={classes.progressBar}>
      
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>13% complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "13%" }}></div>
        </div>
      </div>
      <div className={classes.nextButton}>
        {/* <Link to="/quiz-page"> */}
          <StyledButton className={classes.next} onClick={props.currentQuestion}>
            Next Question {/*submit quiz if progress % is 100% */}
            <span className="material-icons-outlined">arrow_forward</span>
          </StyledButton>
        {/* </Link> */}
      </div>
    </div>
  );
}
