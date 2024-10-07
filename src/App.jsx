import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box, Alert } from "@mui/material";
import logo from "./assets/images/logo.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertAgain, setShowAlertAgain] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSendLink = () => {
    if (emailValid) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setEmailError(true);
      }, 3000);

      setEmail("");

      setButtonDisabled(true);
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    const isValid = email !== "" && validateEmail(email);
    setEmailValid(isValid);
    setButtonDisabled(!isValid);

    if (emailError || showAlertAgain) {
      setEmailError(false);
      setShowAlertAgain(false);
    }
  };

  const handleGetNewLink = () => {
    setShowAlertAgain(true);
    setTimeout(() => {
      setShowAlertAgain(false);
    }, 3000);
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
        <Box
          sx={{ textAlign: "center", marginTop: "auto", marginBottom: "20px" }}
        >
          <Typography variant="h4" component="h1">
            Empowering Startups
          </Typography>
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
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
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
          </Typography>

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
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            An email would be sent to your registered email address to change
            your password.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSendLink}
            disabled={!emailValid || buttonDisabled}
          >
            Send Link
          </Button>
          {emailError && !showAlertAgain && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Didn't receive an email?{" "}
              <a href="#" onClick={handleGetNewLink}>
                Click here to get a new one
              </a>
            </Typography>
          )}
          {(showAlert || showAlertAgain) && (
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
