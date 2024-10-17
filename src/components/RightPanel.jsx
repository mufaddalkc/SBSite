// src/components/RightPanel.js
import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import EmailInput from "./EmailInput";
import AlertMessage from "./AlertMessage";
import Logo from "./Logo";

const RightPanel = ({
  email,
  setEmail,
  handleSendLink,
  buttonDisabled,
  alert,
  handleEmailChange,
  handleKeyPress,
  theme,
}) => {
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
        <Typography variant="subtitle1" gutterBottom>
          Email
        </Typography>
        <EmailInput
          email={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          An email will be sent to your registered email address to change your
          password.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: theme.palette.primary.main, // Use the passed theme
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          onClick={handleSendLink}
          disabled={buttonDisabled}
        >
          Send Link
        </Button>

        <AlertMessage
          show={alert.show}
          error={alert.error}
          message={
            alert.error
              ? "Invalid email address. Please try again."
              : "Link sent successfully! Check your email."
          }
        />
      </Box>
    </Grid>
  );
};

export default RightPanel;
