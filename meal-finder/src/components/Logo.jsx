import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
import React from "react";
import { theme } from "../Theme/theme";

const Logo = () => {
  return (
    <Box component="a" href="/" sx={theme.logoContainer}>
      <Box component="img" sx={{ height: 45 }} alt="Logo" src={logo}></Box>
      <Typography
        variant="h5"
        fontSize={{ xs: 18, md: 22, lg: 25 }}
        color="black"
        noWrap
        sx={{
          ml: 2,
          display: { md: "flex" },
          letterSpacing: ".1rem",
          fontWeight: "light",
          textDecoration: "none",
        }}
      >
        Minimalist
      </Typography>
      <Typography
        variant="h5"
        fontSize={{ xs: 18, md: 22, lg: 25 }}
        color="primary"
        fontWeight="bold"
      >Meals
      </Typography>
    </Box>
  );
};

export default Logo;
