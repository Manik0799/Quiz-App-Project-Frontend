import Answers from "../../answers/answers";
import { Marginer } from "../../marginer/marginer";
import Timer from "../../timer/timer";
import ProgressBar from "../../ui-elements/progress-bar/progressbar";
import screenfull from 'screenfull';


import classes from './quiz.module.css';
import StyledButton from "../../ui-elements/button/button";

export default function Quiz(props) {
  // const handle = useFullScreenHandle();

  if(screenfull.isEnabled) {
    screenfull.request();
    // screenfull.on("error", (event) => {
    //   console.error("Failed to enable fullscreen", event);
    //   alert('Failed to enable fullscreen');
    // });
  }

    return (
      <>

          <div className={classes.timerContainer}>
            <h3>Time Remaining: </h3>
            <Timer />
            <span className="material-icons-outlined">timer</span>
          </div>
          <Marginer direction="vertical" margin={15} />
          <h1>Why is the weather so hot? 🥵</h1>
          <h4>Question can have multiple answers...</h4>
          {/*dont show this under every question, instead keep under instructions*/}
          <Answers />
          <ProgressBar />
        
    </>
    );
}