import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchToken } from "../../Auth";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const defaultValues = {
  quizId : null,
}


export default function JoinQuizModal(props) {

const [formValues, setFormValues] = useState(defaultValues)
  const navigate = useNavigate();


    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

        navigate('/start-quiz-page', {state: {quizId: formValues.quizId}});
          
  }


  return (
    <div>
      <Dialog open={props.openHandler} onClose={props.closeHandler}>
        <DialogTitle>Start a Quiz</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a Valid Quiz Code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name = "quizId"
            value = {formValues.quizId}
            label="Please Enter Quiz Code"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler}>Cancel</Button>
          <Button onClick={handleSubmit}>Start Quiz</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
