import React from "react";
import { Banner, Header } from "../components";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth="1200px">
        <Header />
        <main>
          <Banner />
        </main>
      </Container>
    </>
  );
};

export default Home;
