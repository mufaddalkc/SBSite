import React from "react";
import { TextField } from "@mui/material";
import theme from "../theme";

const EmailInput = ({ value, onChange, onKeyPress, label, type = "text" }) => {
  return (
    <TextField
      label={label}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type={type}
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
