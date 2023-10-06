import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { recipe } from "../api/recipe";
import { Box, CircularProgress, Typography } from "@mui/material";

const Recipe = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => recipe(id)
  });

  if (error) return <Box>{error.message}</Box>;

  return (
    <>
      {isLoading && <CircularProgress />}

      <Typography>{data?.meals[0].strMeal}</Typography>
      <img src={data?.meals[0].strMealThumb} width={"30%"}/>
    </>
  );
};

export default Recipe;
