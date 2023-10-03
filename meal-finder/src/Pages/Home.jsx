import React from "react";
import { Banner, NavBar } from "../components";
import { Container, Input } from "@mui/material";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <>
      <Container maxWidth="1400px">
        <NavBar />
        <main>
          <Banner />
          <Intro />
        </main>
      </Container>
    </>
  );
};

export default Home;
