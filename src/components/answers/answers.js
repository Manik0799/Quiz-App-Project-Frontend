import Checkbox from "../ui-elements/checkbox/checkbox";
import StyledButton from "../ui-elements/button/button";
import classes from "./answers.module.css";
import QuestionData from "../questions/questions";

export default function Answers(props) {
  
  return (
    <div className={classes.answers}>
      {QuestionData.questions[props.currentQuestion].options.map(
        (item) => {
        return <Checkbox
            className={classes.answer}
            key={item.option_id}
            text={item.description}
          />;
        }
      )}

      {/* <Checkbox className={classes.answer} text={props.currentQuestion} />
      <Checkbox className={classes.answer} text="Spring is the new Summer" /> */}
    </div>
  );
}
