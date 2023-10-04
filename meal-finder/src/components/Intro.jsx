import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../Theme/theme";
import { grey, orange } from "@mui/material/colors";

const Intro = ({ textContents }) => {
  const subtextStyle = {
    // color: grey[700],
    fontSize: { xs: 14, md: 16, lg: 18 },
  };
  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
        {textContents.map((items, index) => (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap={2}
            key={index}
            sx={{
              boxShadow: 2,
              padding: 2,
              borderRadius: "15px",
              bgcolor: grey[300],
              // color: "white",
              maxWidth: { xs: "200px", lg: "300px" },
            }}
          >
            <Box
              bgcolor={theme.palette.bgColorGrey.light}
              borderRadius="50%"
              padding={1.5}
            >
              {items.icon}
            </Box>
            <Box>
              <Typography variant="h6" marginBottom={1}>
                {items.title}
              </Typography>
              <Typography variant="p" sx={subtextStyle}>
                {items.content}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Intro;
