import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import classes from "./navbar.module.css";
import Account from "../account/account";

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Anti-Cheat-Quiz-App" />
            <h3>Anti-Cheat Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
