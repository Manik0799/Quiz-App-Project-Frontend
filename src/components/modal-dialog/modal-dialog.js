import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Input, TextField } from "@mui/material";
import classes from './modal-dialog.module.css';
import StyledButton from "../ui-elements/button/button";
import FieldSet from "../ui-elements/textField/textField";

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
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
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
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleJoinClass = () => {};

  return (
    <div>
      <BootstrapDialog
        onClose={props.close}
        // aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          // id="customized-dialog-title"
          onClose={props.close}
        >
          Join Class
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1">Class Code</Typography>
          <Typography variant="subtitle4">
            Ask your teacher for the class code.
          </Typography>
          <br />
          <FieldSet
            label="Enter code"
            // id="enter-code-field"
          />
        </DialogContent>
        <DialogContent className={classes.modalInfo}>
          To sign in with a class code 
          <ul>
            <li>Use an authorized account</li>
            <li>Use a class code with 5-7 letters or numbers without spaces</li>
          </ul>
             
        </DialogContent>

        <DialogActions>
          <StyledButton autoFocus onClick={handleJoinClass}>
            Join
          </StyledButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
