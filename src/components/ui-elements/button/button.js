import Button from "@mui/material/Button";
import React from "react";
import classes from './button.module.css';

function StyledButton({ className, children, ...rest }) {
  return (
    <Button
      variant="contained"
      className={`${classes.button} ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
