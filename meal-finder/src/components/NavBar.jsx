import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const NavLinks = styled("div")(({ theme }) => ({
    my: 5,
    color: grey[600],
    display: "block",
    textTransform: "capitalize",
    transition: "all .2s ease-in-out",
    "&:hover": {
      color: grey[400],
      transform: "scale(1.1)",
    },
  }));

  const handleOpenNavMenu = (event) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          component="a"
          href="#"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            component="img"
            sx={{ height: 45, mx: 2 }}
            alt="Logo"
            src={logo}
          ></Box>
          <Typography
            variant="h5"
            fontSize={{ xs: 18, md: 22, lg:25 }}
            noWrap
            sx={{
              mr: 2,
              display: { md: "flex" },
              letterSpacing: ".1rem",
              fontWeight: "light",
            }}
          >
            Minimalist
            <span style={{ color: "orange", fontWeight: "normal" }}>Meals</span>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 2,
              fontSize : { xs: 10, md: 20, lg:22 },
            }}
          >
            {pages.map((page, index) => (
              <NavLinks component={RouterLink} key={index} to="/" >
                {page}
              </NavLinks>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
