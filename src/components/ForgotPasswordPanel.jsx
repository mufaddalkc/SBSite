import React, { useState } from "react";
import { Grid, Box, Typography, Button, Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EmailInput from "./EmailInput";
import Logo from "./Logo";
import theme from "../theme";

const ForgotPasswordPanel = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSendLinkClick = () => {
    if (!validateEmail(email)) {
      navigate("/not-found");
    } else {
      console.log("Send reset link to:", email);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      <Box sx={{ width: 400, maxWidth: "100%" }}>
        <Logo />

        <EmailInput
          value={email}
          onChange={handleEmailChange}
          label="Enter your email"
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Enter your email address to reset your password.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          onClick={handleSendLinkClick}
        >
          Send Link
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          <MuiLink component={Link} to="/">
            Back to Login
          </MuiLink>
        </Typography>
      </Box>
    </Grid>
  );
};

export default ForgotPasswordPanel;
