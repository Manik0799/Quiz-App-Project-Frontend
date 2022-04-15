import React, { useState } from "react";
import ModalDialogs from "../../modal-dialog/modal-dialog";
import emptyClass from "../../../assests/images/virtual-class.png";
import classes from "./student-landing-page.module.css";
import StyledButton from "../../ui-elements/button/button";
import Subject from "../../subjects/subject";
// import AddPlus from '@mui/icons-material/Add';

function StudentLandPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  let div1text = "To sign in with a class code";
  let div2text = "Use an authorized account";
  let div3text = "Use a class code with 5-7 letters or numbers without spaces";
  let div4text = "Ask your teacher for the class code.";

  return (
    <div>
      <div className={classes.emptyClass}>
        <img src={emptyClass} alt="Join a class" />

        {modalOpen && (
          <ModalDialogs
            open={modalOpen}
            close={handleClose}
            title="Join Class"
            button1="Join"
            contentDiv1={div1text}
            bulletList1 = {div2text}
            bulletList2 = {div3text}
            contentDiv2 = {div4text}
          />
        )}
        <div className={classes.btnWrapper}>
          {/* <Button variant="outlined">Create Class</Button> */}
          <StyledButton variant="contained" onClick={handleClick}>
            Join Class
          </StyledButton>
        </div>
      </div>
      {/* <CustomizedDialogs /> */}
      <Subject />
    </div>
  );
}

export default StudentLandPage;
