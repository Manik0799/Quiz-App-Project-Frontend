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


const defaultValues = {
  course_name : null,
  course_code : null
}


export default function CreateCourseModal(props) {

const [formValues, setFormValues] = useState(defaultValues)
const [newCourseId, setNewCourseId] = useState(null)

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
        course_name : formValues.course_name,
        course_code : formValues.course_code
    }

    const token = fetchToken();
    const authHeader = "bearer " + token

    const response = await axios(
                {
                  method : "post",
                  url : "http://localhost:8000/course",
                  data : payload,
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );
    
    if(response.data){
        setNewCourseId(response.data.id)
    }
  }


  return (
    <div>
      <Dialog open={props.openHandler} onClose={props.closeHandler}>
        <DialogTitle>Create a Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            After successful creation, a unique class code will be generated. Please save the code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name = "course_name"
            value = {formValues.course_name}
            label="Course Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="name"
            name = "course_code"
            value= {formValues.course_code}
            label="Course Code"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}

          />
          {newCourseId && (<p>Course created with id - {newCourseId}</p>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
