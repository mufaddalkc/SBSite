import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import errorImg from "../assets/images/404.png";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(141.7deg, rgba(60, 40, 125, 0.96) 30.44%, #CD2D98 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img
            src={errorImg}
            alt="Page Not Found"
            style={{ width: "400px", height: "400px" }}
          />
        </Grid>
        <Grid item sx={{ marginTop: "0rem" }}>
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            z
            sx={{ fontSize: "2rem" }}
          >
            <b>404 Not found</b>
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            sx={{ fontSize: "0.5rem" }}
          >
            The page you are looking for was not found
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFound;
