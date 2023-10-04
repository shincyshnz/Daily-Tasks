import React from "react";
import { Banner, Cards, NavBar } from "../components";
import { Box, Container } from "@mui/material";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Container maxWidth="1400px">
        <NavBar />
        <main>
          <Banner />

          <Cards />
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
