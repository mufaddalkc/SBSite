import React from "react";
import { TextField } from "@mui/material";
import theme from "../theme";

const EmailInput = ({ email, onChange, onKeyPress }) => {
  return (
    <TextField
      label="Enter your email"
      fullWidth
      margin="normal"
      value={email}
      onChange={onChange}
      onKeyPress={onKeyPress}
      sx={{
        "& .MuiInputBase-input": {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    />
  );
};

export default EmailInput;
