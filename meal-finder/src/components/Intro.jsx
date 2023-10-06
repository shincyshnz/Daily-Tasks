import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../Theme/theme";

const Intro = ({ textContents }) => {
  const subtextStyle = {
    fontSize: { xs: 14, md: 16, lg: 18 },
  };
  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="space-between">
        {textContents.map((items, index) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            textAlign="left"
            gap={2}
            key={index}
            sx={{
              marginBottom : "20px"
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
