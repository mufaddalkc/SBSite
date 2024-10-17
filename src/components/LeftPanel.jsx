import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const LeftPanel = () => {
  return (
    <Grid
      item
      xs={12}
      md={8}
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
        sx={{
          width: 651,
          height: 205,
          textAlign: "left",
          marginTop: "auto",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" component="h1">
          Empowering Startups
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: 16, fontWeight: 300 }}>
          We partner with non-technical founders and SMEs to grow ideas into
          products and businesses.
        </Typography>
      </Box>
    </Grid>
  );
};

export default LeftPanel;
