import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../components";
import { getSingleCategoryItems } from "../api/categoriesApi";
import { theme } from "../Theme/theme";

const Category = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleCategory", categoryName],
    queryFn: () => getSingleCategoryItems(categoryName),
  });

  if (error) return <Box>{error.message}</Box>;

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box textAlign="center" bgcolor={theme.palette.primary.dark} margin={2}>
        <Typography variant="h4" textAlign="center" color="white" padding={3}>
          {categoryName} Recipes
        </Typography>
      </Box>
      {isLoading && <CircularProgress />}
      <Cards data={data} category={categoryName} />
    </Container>
  );
};

export default Category;
