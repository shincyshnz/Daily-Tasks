import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { CopyrightRounded } from "@mui/icons-material";
import { theme } from "../Theme/theme";

const Footer = () => {
  return (
    <footer>
      <Box textAlign="center" paddingY={5} bgcolor={theme.palette.primary.light} marginTop={10}>
        <Logo />
        <Box marginTop={3}>
          <Typography variant="p">
            Copyright <CopyrightRounded fontSize="sm" /> 2012 - 2023. All rights
            reserved{" "}
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
