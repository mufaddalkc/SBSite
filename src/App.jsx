import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box, Alert } from "@mui/material";
import logo from "./assets/images/logo.png";
import theme from "./theme";

function App() {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // Validate email format
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setButtonDisabled(!validateEmail(emailValue));
  };

  // Send email link
  const handleSendLink = () => {
    if (!buttonDisabled) {
      setShowAlert(true);
      setEmailError(false);
      setTimeout(() => {
        setEmail("");
        setShowAlert(false);
        setEmailError(true);
      }, 3000);
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side - Gradient Background */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background:
            "linear-gradient(141.7deg, rgba(60, 40, 125, 0.96) 30.44%, #CD2D98 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "2rem",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Empowering Startups</Typography>
          <Typography variant="subtitle1">
            We partner with non-technical founders and SMEs to grow ideas into
            products and businesses.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 400, maxWidth: "100%" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 205,
              height: 75,
              display: "block",
              margin: "0 auto",
            }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Email
          </Typography>
          <TextField
            label="Enter your email"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            sx={{
              "& .MuiInputBase-input": {
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            An email will be sent to your registered email address to change
            your password.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSendLink}
            disabled={buttonDisabled}
          >
            Send Link
          </Button>

          {emailError && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Didn't receive an email?{" "}
              <a href="#" onClick={() => setShowAlert(true)}>
                Click here to get a new one
              </a>
            </Typography>
          )}

          {showAlert && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Link sent successfully!
            </Alert>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
