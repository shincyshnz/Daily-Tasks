import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { theme } from "../Theme/theme";
import { grey } from "@mui/material/colors";

const Intro = () => {
  const stackEssentials = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 2,
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

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        justifyContent="space-around"
        paddingTop={8}
      >
        <Box>
          {textContents.map((items, index) => (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              key={index}
              paddingY={3}
            >
              <Box
                bgcolor={theme.palette.bgColorGrey.light}
                borderRadius="50%"
                padding={1.5}
                boxShadow={1}
              >
                {items.icon}
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontSize={{ md: 15, lg: 18 }}
                  marginBottom={1}
                >
                  {items.title}
                </Typography>
                <Typography
                  variant="p"
                  color={grey[500]}
                  fontSize={{ xs: 12, md: 16, lg: 17 }}
                >
                  {items.content}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bgcolor={theme.palette.bgColorGrey.light}
            borderRadius="50%"
            padding={1.5}
            boxShadow={1}
          >
            <AutoStoriesOutlinedIcon color="primary" />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={15} marginBottom={1}>
              Read Recipe
            </Typography>
            <Typography
              variant="p"
              color={grey[500]}
              fontSize={{ xs: 12, md: 16 }}
            >
              Search and read what recipe you want to cook. Find 100+ more
              recipes available in MinimalistMeals.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Intro;
