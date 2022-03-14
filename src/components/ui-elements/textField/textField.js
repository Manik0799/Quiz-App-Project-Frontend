import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from "react";
import classes from './textField.module.css';

const CustomFieldSet = styled(TextField) ({
    '& label.Mui-focused': {
        color: '#4890c0',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#4890c0',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#4890c0',
        },
        '&:hover fieldset': {
          borderColor: '#4890c0',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#4890c0',
        },
      },
});

function FieldSet({ className, children, ...rest }) {
  return (
    <CustomFieldSet
      className={`${classes.fieldSet} ${className}`}
      {...rest}
    >
      {children}
    </CustomFieldSet>
  );
}

export default FieldSet;
