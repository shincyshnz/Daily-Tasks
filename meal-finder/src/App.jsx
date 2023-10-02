import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
