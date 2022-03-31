import Checkbox from "../ui-elements/checkbox/checkbox";
import classes from "./answers.module.css";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text='Option 1'/>
    </div>
  );
}
