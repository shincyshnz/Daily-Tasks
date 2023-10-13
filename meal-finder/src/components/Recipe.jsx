import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { recipe } from "../api/recipe";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const Recipe = () => {
  const { id } = useParams();

  const { data: meal, error, isLoading } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => recipe(id),
  });

  if (error) return <Box>{error.message}</Box>;
  console.log(meal);
  return (
    <>
      <Stack direction={{ sm: "column", md: "row" }} marginTop={5} gap={6}>
        {isLoading && <CircularProgress />}

        <Box>
          <img src={meal?.strMealThumb} alt={meal?.strMeal} width={"100%"} />
        </Box>

        <Box textAlign="left">
          <Typography variant="h4">{meal?.strMeal}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={meal?.strIngredient1} />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default Recipe;
