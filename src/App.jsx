import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import theme from "./theme";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, error: false });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSendLink = () => {
    if (validateEmail(email)) {
      setAlert({ show: true, error: false });
      setButtonDisabled(true);
      setEmail("");

      setTimeout(() => {
        setAlert({ show: false, error: false });
        setButtonDisabled(false);
      }, 3000);
    } else {
      setAlert({ show: true, error: true });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (alert.error) {
      setAlert({ show: false, error: false });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && validateEmail(email)) {
      handleSendLink();
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <LeftPanel />
      <RightPanel
        email={email}
        setEmail={setEmail}
        handleSendLink={handleSendLink}
        buttonDisabled={buttonDisabled}
        alert={alert}
        handleEmailChange={handleEmailChange}
        handleKeyPress={handleKeyPress}
        theme={theme}
      />
    </Grid>
  );
}

export default function AppContainer() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
