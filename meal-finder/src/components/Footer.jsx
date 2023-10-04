import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { CopyrightRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <Box textAlign="center" paddingY={10}>
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
