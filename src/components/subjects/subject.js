import * as React from "react";
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
import { ArrowForwardOutlined, AssessmentOutlined } from "@mui/icons-material";
import { Marginer } from "../marginer/marginer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Subject(props) {

  const handleSubjectCardClick = async() => {
    // Make request to the fetch course information API
    const API_URL = "http://localhost:8000/course/" + props.id;

    const response = await axios(
      {
            method : "get",
            url : API_URL,
      }
    );

    console.log(response.data)
  }
  return (
    <>
      <Marginer direction="vertical" margin={15} />
      <Card sx={{ maxWidth: 350, borderRadius: 3, bgcolor: "whitesmoke" }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[900] }} aria-label="subject">
                {props.name.substring(0,1)}
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

            <IconButton
              aria-label="details"
              sx={{ color: blue[900], marginLeft: 32 }}
              onClick = {handleSubjectCardClick}
            >
              <ArrowForwardOutlined />
            </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
