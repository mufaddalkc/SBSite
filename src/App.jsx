import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LeftPanel from "./components/LeftPanel";
import LoginPanel from "./components/LoginPanel";
import ForgotPasswordPanel from "./components/ForgotPasswordPanel";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container sx={{ height: "100vh" }}>
          <LeftPanel />
          <Routes>
            <Route path="/" element={<LoginPanel />} />
            <Route path="/forgot-password" element={<ForgotPasswordPanel />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
