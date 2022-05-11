import React, { useState, useEffect } from "react";
import emptyClass from "../../../assests/images/virtual-class.png";
import classes from "./student-landing-page.module.css";
import StyledButton from "../../ui-elements/button/button";
import Subject from "../../subjects/subject";
// import AddPlus from '@mui/icons-material/Add';
import axios from "axios";
import {fetchToken} from '../../../Auth'
import JoinCourseModal from "../../modal-dialog/join-course-modal";
import {Marginer} from '../../marginer/marginer';

function StudentLandPage() {

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
                  url : "http://localhost:8000/student-joined-courses",
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

    console.log("courses state: ", courses);

  const handleClickOpen = () => {
      setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.Wrapper}>
      {/* <div className={classes.emptyClass}> */}
        {/* <img src={emptyClass} alt="Join a class" /> */}
        {modalOpen && (
          <JoinCourseModal
            openHandler={handleClickOpen}
            closeHandler={handleClose}
          />
        )}

        <div className={classes.btnWrapper}> 
          {/* <Button variant="outlined">Create Class</Button>  */}
          <StyledButton variant="contained" onClick={handleClickOpen}> 
            Join Class
          </StyledButton> 
         </div>
    

      {/* Mapping the fetched course data to display subject cards */}
      <div className={classes.clsWrapper}>
      {courses.map(course => {
        return (
          <>
            <Subject
              key={course.id}
              code={course.course_code}
              name={course.course_name}
              id={course.id}
            />
            <Marginer direction='horizontal' margin={40}/>
          </>
        ); 
      })}
      </div>
      {/* <Subject /> */}
    </div>
  );
}

export default StudentLandPage;
