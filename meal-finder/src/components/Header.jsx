import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      path: "/",
      name: "cat1",
    },
    {
      path: "/",
      name: "cat2",
    },
    {
      path: "/",
      name: "cat3",
    },
  ];
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "grey",
  };

  return (
    <header>
      <AppBar position="relative" color="" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              sx={{ height: 45, mx: 2 }}
              alt="Logo"
              src={logo}
            ></Box>

            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "light" }}
                fontSize={{ xs: 15, md: 20 }}
              >
                Minimalist
                <span style={{ color: "orange", fontWeight: "normal" }}>
                  Meals
                </span>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              justifySelf: "right",
            }}
          >
            {navLinks.map((item, index) => (
              <Typography key={index}>
                <Link href={item.path} style={linkStyle}>
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
