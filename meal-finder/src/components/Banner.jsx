import React from "react";
import { Typography, Grid, Box } from "@mui/material";

import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import bannerImage from "../assets/images/meal-hd.jpg";
import sideImage from "../assets/images/grilled.jpg";
import hamburger from "../assets/images/hamburger.png";
import pizza from "../assets/images/pizza.png";
import { grey } from "@mui/material/colors";
import { theme } from "../Theme/theme";
import Intro from "./Intro";

const Banner = () => {
  const gridStyle = {
    paddingX: { xs: 2, md: 8 },
    marginTop: { xs: 2, md: 0 },
    spacing: { xs: 2, md: 1 },
    columns: { xs: 4, sm: 8, md: 12 },
    direction: "row",
    justifyContent: { md: "space-between", lg: "center" },
    alignItems: "center",
    textAlign: { xs: "center", md: "left" },
  };
  const textContents = [
    {
      icon: <AutoStoriesOutlinedIcon color="primary" />,
      title: "Read Recipe",
      content:
        "Search and read what recipe you want to cook. Find 100+ more recipes available in MinimalistMeals.",
    },
    {
      icon: <KebabDiningOutlinedIcon color="primary" />,
      title: "Prepare The Ingredients",
      content:
        "Prepare cooking utensils and food ingredients that will be used for the menu you will cook.",
    },
    {
      icon: <SoupKitchenOutlinedIcon color="primary" />,
      title: "Start Cooking",
      content:
        "Cook the menu of the dishes, according to the instructions listed in the recipe guide that you cook.",
    },
    {
      icon: <RamenDiningOutlinedIcon color="primary" />,
      title: "Enjoy Your Food",
      content:
        "Serve the food you have cooked, then enjoy the meal with your loved ones.",
    },
  ];

  const imageURL = "./src/assets/images/bgFood.jpg";

  return (
    <>
      <Grid container sx={gridStyle}>
        <Grid item xs={12} md={6} letterSpacing={{ xs: 2 }}>
          <Typography
            variant="h3"
            gutterBottom
            fontSize={{ xs: 26, md: 45, lg: 48 }}
            sx={{ fontWeight: "bold" }}
            lineHeight={{ md: 1.5 }}
          >
            Make delicious food and feel experience like a professional chef.
          </Typography>
          <Typography
            variant="p"
            color={grey[700]}
            fontSize={{ xs: 16, md: 20, lg: 22 }}
          >
            It's time to make delicious food with the best recipes and
            experience like a professional chef.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} position="relative">
          <Box
            component="img"
            width={{ xs: "100%", md: "100%", lg: "120%" }}
            alt="Logo"
            src={bannerImage}
          ></Box>

          <Box
            top={{ xs: 10, md: 0, lg: 40 }}
            left={{ xs: 10, md: 0, lg: 40 }}
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

      <Box>
        <Grid container sx={gridStyle} paddingY={5}>
          <Grid display={{ xs: "none", md: "block" }} item xs={6} md={6}>
            <Box
              component="img"
              width={{ xs: "50%", md: "80%" }}
              alt="Logo"
              src={bannerImage}
            ></Box>
            {/* <Box>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                paddingY={3}
              >
                <Box>
                  <Typography variant="h3" marginBottom={1}>
                    Let's Cook Now
                  </Typography>
                  <Typography variant="p" fontSize={{ md: 20 }}>
                    Make your family happy with the dishes you make with us.
                    Cooking just got easier.
                  </Typography>
                </Box>
              </Stack>
            </Box> */}
          </Grid>

          <Grid item xs={12} md={6}>
            <Intro textContents={textContents} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
