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

export default function Subject() {
  return (
    <>
      <Marginer direction="vertical" margin={15} />
      <Card sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[900] }} aria-label="subject">
                KS
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="CSPC-402, System Programming and Compiler Design"
            subheader="B.Tech CSE 8th Sem"
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

          <Link to="/subject-landing-page">
            <IconButton
              aria-label="details"
              sx={{ color: blue[900], marginLeft: 32 }}
            >
              <ArrowForwardOutlined />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
