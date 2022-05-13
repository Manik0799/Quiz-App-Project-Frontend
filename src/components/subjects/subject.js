import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import subject from "../../assests/images/subject_class.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { ArrowForwardOutlined, AssessmentOutlined } from "@mui/icons-material";
import { Marginer } from "../marginer/marginer";
import { Link } from "react-router-dom";
import axios from "axios";
import SubjectPage from "../pages/student-dashboard/subject-landing-page";
import { useNavigate, Navigate } from "react-router-dom";

export default function Subject(props) {
  const [courseList, setCourseList] = useState([]);
  const [subjectlandPage, setSubjectlandPage] = useState(false);
  console.log("subjectlandpage", subjectlandPage);

  const navigate = useNavigate();

  // useEffect(() => {
  const handleSubjectCardClick = async () => {
    // Make request to the fetch course information API
    const API_URL = "http://localhost:8000/course/" + props.id;

    // const response = await axios({
    //   method: "get",
    //   url: API_URL,
    // });

    axios.get(API_URL).then((response) => {
      console.log(response);
      setCourseList(response.data);
      setSubjectlandPage(true);

      navigate('/subject-landing-page', {state: {courses: response.data}});
    });

    // setCourseList([...courseList, response.data]);
    // setSubjectlandPage(true);

    // console.log("res", response.data);

    // let result = Object.keys(response.data).map(function (name) {
    //   let obj = {};
    //   obj[name] = response.data[name];
    //   return obj;
    // });
    // console.log('results: ', result)
    // console.log("courses", courseList);

    // navigate('/subject-landing-page')
    // return <Navigate to='/subject-landing-page' />
  };
  //   handleSubjectCardClick();
  // }, [props.id]);

  // useEffect(() => {
  //   handleSubjectCardClick();
  // }, []);

  return (
    <>
      <Marginer direction="vertical" margin={15} />
      <Card sx={{ maxWidth: 350, borderRadius: 3, bgcolor: "whitesmoke" }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[900] }} aria-label="subject">
                {props.name.substring(0, 1)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.code + " , " + props.name}
            // subheader="B.Tech CSE 8th Sem"
          />
          <CardMedia
            component="img"
            height="144"
            // backgroundSize="cover"
            // backgroundPosition="50% 50%"
            image={subject}
            alt="subject_name"
          />
        </CardActionArea>
        <CardActions disableSpacing>
          <Link to="/analysis-page">
            <IconButton aria-label="analysis" sx={{ color: blue[900] }}>
              <AssessmentOutlined />
            </IconButton>
          </Link>
          {console.log("whre are the props", props.role)}
          {props.role === "teacher" ? (
            ((
              <Link to="/create-quiz">
                <IconButton aria-label="create-quiz" sx={{ color: blue[900] }}>
                  <AddOutlinedIcon />
                </IconButton>
              </Link>
            ),
            (
              /* send id as props to create-quiz page */
              // <Link to="/subject-landing-page">
              <IconButton
                aria-label="details"
                sx={{ color: blue[900], marginLeft: 32 }}
                onClick={handleSubjectCardClick}
              >
                <ArrowForwardOutlined />
              </IconButton>
            ))
          ) : (
            // </Link>
            <Link to="/subject-landing-page">
              <IconButton
                aria-label="details"
                sx={{ color: blue[900], marginLeft: 32 }}
                onClick={handleSubjectCardClick}
              >
                <ArrowForwardOutlined />
              </IconButton>
            </Link>
          )}
        </CardActions>
      </Card>
    </>
  );
}
