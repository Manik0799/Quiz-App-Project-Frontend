import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Button from "@material-ui/core/Button";
import StyledButton from "../../ui-elements/button/button";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Marginer } from "../../marginer/marginer";

const defaultValues = {
  startTime : null,
  duration : null,
  file: null,
};

const Form = () => {

  const {state} = useLocation()
  const {courseId} = state
  const [formValues, setFormValues] = useState(defaultValues);
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (start_time) => {
      setFormValues({
          ...formValues,
          startTime : start_time
      })
  }

  const allowedTypes = ["text/csv"]
  const handleFileChange = (e) => {

      const selectedFile = e.target.files[0]

      if(selectedFile && allowedTypes.includes(selectedFile.type)){
          setFormValues({
              ...formValues,
              file : selectedFile
          })
          setError(null)
      }
      else{
            setFormValues({
                ...formValues,
                file : null
            });
            setError("Please select a valid file type (csv)")
        }

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    var formData = new FormData()

    formData.append('csv_file', formValues.file)

    let read_csv_response = await axios({
        method : "post",
        url : "http://localhost:8000/quiz/read-csv-file",
        data : formData,
        headers: {
                    'Content-Type': 'multipart/form-data'
                }
    })

    var question_data = read_csv_response.data
    
    const payload = {
        course_id : courseId,
        start_time : parseInt(Date.parse(formValues.startTime)),
        duration : parseInt(formValues.duration),
        questions : question_data
    }

    // Sending request to the backend api to create the quiz
    let response = await axios({
        method : "post",
        url : "http://localhost:8000/quiz/create-quiz",
        data : payload,
        headers: {
                    'Content-Type': 'application/json'
                }
    })

    console.log(response)

  };



  return (
    <form onSubmit={handleSubmit}>
        <Marginer direction='vertical' margin={90} />

      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
            label="Quiz Start Time"
            value={formValues.startTime}
            onChange={handleDateChange}
            />
         </MuiPickersUtilsProvider>
        </Grid>
        <Marginer direction='vertical' margin={30} />

        <Grid item >
          <TextField
            id="duration-input"
            name="duration"
            label="Duration (in minutes)"
            type="number"
            value={formValues.duration}
            onChange={handleInputChange}
          />
        </Grid>
                <Marginer direction='vertical' margin={35} />

             <Grid item >
            <label>
                <input type = "file" onChange = {handleFileChange}/>
            </label>
            <div className = "output">
                {error && <div> {error} </div>}
                {formValues.file && <div>{formValues.file.name}</div>}
            </div>
            </Grid>
        <Marginer direction='vertical' margin={30} />
                <Marginer direction='horizontal' margin={20} />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>


  );
};
export default Form;