import React from "react";
import { Box, TextField } from "@mui/material";

const Input = ({ defaultValue = "", label, autoComplete = "off" }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete={autoComplete}
      >
        <div>
          <TextField
            // error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            // error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
      </Box>
    </>
  );
};

export default Input;
