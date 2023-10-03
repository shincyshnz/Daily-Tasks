import React from "react";
import { Typography, Grid, Box, Container, Fade } from "@mui/material";

import bannerImage from "../assets/images/meal-hd.jpg";
import hamburger from "../assets/images/hamburger.png";
import pizza from "../assets/images/pizza.png";
import { grey } from "@mui/material/colors";
import { theme } from "../Theme/theme";

const Banner = () => {
  return (
    <Grid
      container
      paddingX={{ xs: 2, md: 8 }}
      marginTop={{ xs: 2, md: 0 }}
      spacing={{ xs: 2, md: 1 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="row"
      justifyContent={{ md: "space-between", lg: "center" }}
      alignItems="center"
      textAlign={{ xs: "center", md: "left" }}
    >
      <Grid item xs={6} letterSpacing={{ xs: 2 }}>
        <Typography
          variant="h3"
          gutterBottom
          fontSize={{ xs: 26, md: 45, lg: 48 }}
          sx={{ fontWeight: "bold" }}
          lineHeight={{ md: 1.5 }}
        >
          Make delicious food and feel experience like a professional chef.
        </Typography>
        <Typography variant="p" color={grey[700]} fontSize={{ xs: 16, md: 20, lg: 22 }}>
          It's time to make delicious food with the best recipes and experience
          like a professional chef.
        </Typography>
      </Grid>

      <Grid item xs={4} position="relative">
        <Box
          component="img"
          width={{ xs: "100%", md: "120%" }}
          alt="Logo"
          src={bannerImage}
        ></Box>

        <Box
          top={{ xs: 30, lg: 40 }}
          left={{ xs: 30, lg: 40 }}
          sx={theme.floatingIconStyle}
        >
          <Box
            component="img"
            alt="Logo"
            src={hamburger}
            width={{ xs: "30px" }}
          ></Box>
        </Box>
        <Box
          bottom={{ xs: 8, lg: 10 }}
          right={{ xs: 8, lg: 10 }}
          sx={theme.floatingIconStyle}
        >
          <Box
            component="img"
            alt="Logo"
            src={pizza}
            width={{ xs: "30px" }}
          ></Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
