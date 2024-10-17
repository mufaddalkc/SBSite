import React from "react";
import logo from "../assets/images/logo.png";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography variant="h6" component="h2" gutterBottom>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: 205,
          height: 75,
          margin: "0 auto",
          display: "block",
        }}
      />
    </Typography>
  );
};

export default Logo;
