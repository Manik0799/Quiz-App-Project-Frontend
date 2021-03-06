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
  courseId : null,
}


export default function JoinCourseModal(props) {

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
    
    let payload = {
        courseId : formValues.courseId
    };

    const token = fetchToken();
    const authHeader = "bearer " + token

    const response = await axios(
                {
                  method : "post",
                  url : "http://localhost:8000/student-join-course",
                  data : payload,
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );
    
     if(response.data.message === "Successfully joined the Class"){
        navigate('/student-landing-page');
     }           
  }


  return (
    <div>
      <Dialog open={props.openHandler} onClose={props.closeHandler}>
        <DialogTitle>Join a Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter a Valid Course Code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name = "courseId"
            value = {formValues.courseId}
            label="Please Enter Course Code"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler}>Cancel</Button>
          <Button onClick={handleSubmit}>Join Class</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
