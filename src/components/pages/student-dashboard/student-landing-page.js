import React, {useState} from "react";
import ModalDialogs from "../../modal-dialog/modal-dialog";
import emptyClass from "../../../assests/images/virtual-class.png";
import classes from "./student-landing-page.module.css";
import { Button } from "@mui/material";
import StyledButton from "../../ui-elements/button/button";
// import AddPlus from '@mui/icons-material/Add';

function StudentLandPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }
  return (
    <div>
      <div className={classes.emptyClass}>
        <img src={emptyClass} alt="Join a class" />

        {modalOpen && <ModalDialogs
          open={modalOpen}
          close={handleClose}
          />}
        <div className={classes.btnWrapper}>
          {/* <Button variant="outlined">Create Class</Button> */}
          <StyledButton variant="contained" onClick={handleClick}>Join Class</StyledButton>
        </div>
      </div>
      {/* <CustomizedDialogs /> */}
      {/* StudentLandPage */}
    </div>
  );
}

export default StudentLandPage;
