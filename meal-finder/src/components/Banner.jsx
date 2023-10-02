import React from "react";
import { Typography, Grid, Box, Container } from "@mui/material";

import bannerImage from "../assets/images/meal-hd.jpg";
import hamburger from "../assets/images/hamburger.png";
import pizza from "../assets/images/pizza.png";
import { grey } from "@mui/material/colors";

const Banner = () => {
  return (
    <Container maxWidth="100%">
      <Grid
        container
        xs={12}
        paddingX={{ xs: 2, md: 8 }}
        marginTop={{ xs: 2, md: 0 }}
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        <Grid item={true} xs={8} 
        letterSpacing={{ xs: 2, md: 2 }}>
          <Typography
            variant="h3"
            fontSize={{ xs: 26, md: 45 }}
            sx={{ fontWeight: "light" }}
            marginBottom={3}
          >
            Make delicious food and <br /> feel experience like a <br />{" "}
            professional Chef.
          </Typography>
          <Typography
            variant="p"
            color={grey[700]}
            fontSize={{ xs: 16, md: 20 }}
          >
            It's time to make delicious food with the best recipes and
            <br />
            experience like a professional chef.
          </Typography>
        </Grid>

        <Grid item={true} xs={4} position="relative">
          <Box
            component="img"
            width={{ xs: "100%", md: "120%" }}
            alt="Logo"
            src={bannerImage}
          ></Box>

          <Box
            position="absolute"
            sx={{ borderRadius: "50%", boxShadow: 1 }}
            top={{ xs: 5, md: 30, lg: 40 }}
            left={{ xs: 0, md: 30, lg: 40 }}
            width={{ xs: "50px" }}
            height={{ xs: "40px" }}
            textAlign="center"
            paddingTop={1}
          >
            <Box
              component="img"
              alt="Logo"
              src={hamburger}
              width={{ xs: "30px" }}
            ></Box>
          </Box>
          <Box
            position="absolute"
            sx={{ borderRadius: "50%", boxShadow: 1 }}
            bottom={{ xs: 0, mg: 8, lg: 10 }}
            right={{ xs: 2, mg: 8, lg: 10 }}
            width={{ xs: "50px" }}
            height={{ xs: "40px" }}
            textAlign="center"
            paddingTop={1}
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
    </Container>
  );
};

export default Banner;
