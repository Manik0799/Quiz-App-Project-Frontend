import NavBar from "../navbar/navbar";
import classes from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
