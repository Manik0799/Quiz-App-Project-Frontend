import { useState } from "react";
import ModalDialogs from "../modal-dialog/modal-dialog";
import classes from "./account.module.css";

export default function Account() {
  // define state, logic to authenticate user
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.account}>
      {modalOpen && <ModalDialogs open={modalOpen} close={handleClose} />}
      <span
        className="material-icons-outlined"
        title="Join Class"
        onClick={handleClick}
      >
        add
      </span>
      <span className="material-icons-outlined" title="UserAccount">
        account_circle {/*show icon and username after user logged in */}
      </span>
    </div>
  );
}
