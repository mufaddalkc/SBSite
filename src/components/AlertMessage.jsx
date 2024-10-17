import React from "react";
import { Alert } from "@mui/material";

const AlertMessage = ({ show, error, message }) => {
  if (!show) return null;

  return (
    <Alert severity={error ? "error" : "success"} sx={{ mt: 2 }}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
