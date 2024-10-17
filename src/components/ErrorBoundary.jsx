// src/components/NotFound.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The email address you entered is not recognized.
      </Typography>
    </Box>
  );
};

export default NotFound;
