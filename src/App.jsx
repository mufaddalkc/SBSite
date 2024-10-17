import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LeftPanel from "./components/LeftPanel";
import LoginPanel from "./components/LoginPanel";
import ForgotPasswordPanel from "./components/ForgotPasswordPanel";
import NotFound from "./components/NotFound";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container sx={{ height: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LeftPanel />
                  <LoginPanel />
                </>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <>
                  <LeftPanel />
                  <ForgotPasswordPanel />
                </>
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
