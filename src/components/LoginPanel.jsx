import React, { useState } from "react";
import { Grid, Box, Typography, Button, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import EmailInput from "./EmailInput";
import Logo from "./Logo";
import theme from "../theme";

const LoginPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

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
          onChange={(e) => setEmail(e.target.value)}
          label="Enter your email"
        />

        <EmailInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Enter your password"
          type="password"
        />

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
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          <MuiLink component={Link} to="/forgot-password">
            Forgot Password?
          </MuiLink>
        </Typography>
      </Box>
    </Grid>
  );
};

export default LoginPanel;
