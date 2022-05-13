import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import classes from "./modal-dialog.module.css";
import StyledButton from "../ui-elements/button/button";
import FieldSet from "../ui-elements/textField/textField";
import Quiz from "../pages/quiz/quiz";
// import { DocumentFullScreen } from "@chiragrupani/fullscreen-react";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link, useNavigate } from "react-router-dom";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 13,
            color: "white",
            backgroundColor: "white",
          }}
        >
          <CloseIcon sx={{ color: green[50] }} /> {/*TODO: fix color of icon */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalDialogs(props) {
  // let [isFullScreen, setFullScreen] = useState(false);
  // const handle = useFullScreenHandle();

  // const handleJoinClass = () => {};
  const navigate = useNavigate();
  const handleQuizOpen = () => {
    navigate('/quiz-page', {state : {quizData : props.quizData}})
  };

  return (
    <div>
      <BootstrapDialog
        onClose={props.close}
        // aria-labelledby="customized-dialog-title"
        open={props.open}
        hideBackdrop
      >
        <BootstrapDialogTitle
          // id="customized-dialog-title"
          onClose={props.close}
          className={classes.modalTitle}
        >
          {/* Join Class */}
          {props.title}
        </BootstrapDialogTitle>

        <DialogContent className={classes.modalInfo}>
          
          {props.title === "Join Class" && props.contentDiv1}
          <ul>
            <li>{props.bulletList1}</li>
            <li>{props.bulletList2}</li>
            <li>{props.bulletList3}</li>
          </ul>
        </DialogContent>

        {props.title === "Join Class" && (
          <DialogContent dividers>
            <Typography variant="subtitle2">
              {props.contentDiv2}
            </Typography>
            <FieldSet
              label="Enter code"
              size="small"
              margin="dense"
            />
          </DialogContent>
        )}

        
            {/* {isFullScreen && <Quiz /> */}
        
        
        <DialogActions>
          {props.title === 'Continue?' ? (
              <StyledButton
            autoFocus onClick = {handleQuizOpen}
          >
            {props.button1}
          </StyledButton>
            ) : 
            <StyledButton>{props.button1}</StyledButton>
            }
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
