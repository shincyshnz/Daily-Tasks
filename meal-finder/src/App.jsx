import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import { Container } from "@mui/material";
import { NavBar } from "./components";
import Footer from "./components/Footer";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <>
      <Container maxWidth="1200px">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:categoryName" element={<Category />}></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
