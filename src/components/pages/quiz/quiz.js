import Answers from "../../answers/answers";
import Timer from "../../timer/timer";
import ProgressBar from "../../ui-elements/progress-bar/progressbar";
import classes from './quiz.module.css';

export default function Quiz() {

    return (
      <>
        <div className={classes.timerContainer}>
          <h3>Time Remaining: </h3>
          <Timer />
          <span className="material-icons-outlined">timer</span>
        </div>
        <br/> {/*instead add marginTop in the question container*/}
        <h1>Why is the weather so hot? 🥵</h1>
        <h4>Question can have multiple answers...</h4>{" "}
        {/*dont show this under every question, instead keep under instructions*/}
        <Answers />
        <ProgressBar />
      </>
    );
}