import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../components";
import { getSingleCategoryItems } from "../api/categoriesApi";

const Category = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleCategory", categoryName],
    queryFn: () => getSingleCategoryItems(categoryName),
  });

  if(error) return <Box>{error.message}</Box>

  return (
    <>
      {isLoading && <CircularProgress />}
      <Cards data={data} category={categoryName}/>
    </>
  );
};

export default Category;
