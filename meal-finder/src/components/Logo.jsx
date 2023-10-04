import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
import React from "react";

const Logo = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box component="img" sx={{ height: 45 }} alt="Logo" src={logo}></Box>
      <Typography
        variant="h5"
        fontSize={{ xs: 18, md: 22, lg: 25 }}
        noWrap
        sx={{
          ml: 2,
          display: { md: "flex" },
          letterSpacing: ".1rem",
          fontWeight: "light",
        }}
      >
        Minimalist
        <span style={{ color: "primary", fontWeight: "normal" }}>Meals</span>
      </Typography>
    </Box>
  );
};

export default Logo;
