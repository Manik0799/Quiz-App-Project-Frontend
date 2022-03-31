import StyledButton from "../button/button";
import classes from "./progressbar.module.css";

export default function ProgressBar() {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined">arrow_back</span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>% complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <div className={classes.nextButton}>
        <StyledButton className={classes.next}>
          Next Question {/*submit quiz if progress % is 100% */}
          <span className="material-icons-outlined">arrow_forward</span>
        </StyledButton>
      </div>
    </div>
  );
}
