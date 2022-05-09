import React, { useState, useEffect } from "react";
import CreateCourseModal from "../../modal-dialog/create-course-modal";
import emptyClass from "../../../assests/images/virtual-class.png";
import classes from "./teacher-landing-page.module.css";
import StyledButton from "../../ui-elements/button/button";
import Subject from "../../subjects/subject";
// import AddPlus from '@mui/icons-material/Add';
import axios from "axios";
import {fetchToken} from '../../../Auth'
import { Button } from "@mui/material";

function TeacherLandingPage() {

  const [modalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState([])


    useEffect(() => {

        const token = fetchToken();
        let authHeader = "bearer " + token
        
        const fetchData = async () => {
            try {
              const response = await axios(
                {
                  method : "get",
                  url : "http://localhost:8000/teacher-fetchCourseList",
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );

              setCourses(response.data)
                
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);



  const handleClickOpen = () => {
      setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <div className={classes.emptyClass}>
        {/* <img src={emptyClass} alt="Join a class" /> */}

        {modalOpen && (
          <CreateCourseModal
            openHandler={handleClickOpen}
            closeHandler={handleClose}
          />
        )}

        <div className={classes.btnWrapper}> 
          {/* <Button variant="outlined">Create Class</Button>  */}
          <StyledButton variant="contained" onClick={handleClickOpen}> 
            Create Class 
          </StyledButton> 
         </div>
        
      </div>
      {/* <CustomizedDialogs /> */}
      
            
      {/* Mapping the fetched course data to display subject cards */}
      {courses.map(course => {
        return <Subject key = {course.id} code = {course.course_code} name = {course.course_name}/>
      })}
      {/* <Subject /> */}
    </div>
  );
}

export default TeacherLandingPage;
