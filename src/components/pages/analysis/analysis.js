import React from "react";
import Card from "@mui/material/Card";
import { CardActions, IconButton } from "@mui/material";
import { Marginer } from "../../marginer/marginer";
import StyledButton from '../../ui-elements/button/button'
import classes from './analysis.module.css'

function Analysis() {
  return (
    <>
      <Marginer direction="vertical" margin={15} />
      <Card sx={{ maxWidth: 770, margin: "0 auto" }}>
        <Marginer direction="vertical" margin={10} />
        <div className={classes.container}>
          <div className={classes.sideBar}>
            <Card sx={{ width: 150, bgcolor: "whitesmoke" }}>
              <Marginer direction="vertical" margin={10} />

              <StyledButton>Quiz-4</StyledButton>
              <Marginer direction="vertical" margin={10} />

              <StyledButton>Quiz-3</StyledButton>
              <Marginer direction="vertical" margin={10} />

              <StyledButton>Quiz-2</StyledButton>
              <Marginer direction="vertical" margin={10} />

              <StyledButton>Quiz-1</StyledButton>
              <Marginer direction="vertical" margin={10} />
            </Card>
          </div>
          <div className={classes.analysis}>
            <div className={classes.analysisHeader}>
              <h3>Quiz-2</h3>
              <span>16/20</span>
            </div>
            <div className={classes.analysisChart}>
              {/* display chart here */}
            </div>
            <Marginer direction='vertical' margin={10} />
            <div className={classes.analysisNav}>
              <StyledButton>My Responses</StyledButton>
              <StyledButton>Class Performance</StyledButton>
            </div>
          </div>
        </div>
        <Marginer direction="vertical" margin={10} />
      </Card>
    </>
  );
}

export default Analysis;
