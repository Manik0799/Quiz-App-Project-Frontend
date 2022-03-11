import classes from "./textinput.module.css";

export default function TextInput({ icon, ...other }) {
  return (
    <div className={classes.textInput}>
      <input {...other} />
      <span className="material-icons-outlined">{icon}</span>{" "}
    </div>
  );
}
