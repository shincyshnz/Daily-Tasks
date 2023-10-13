import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { recipe } from "../api/recipe";
import {
  Box,
  CircularProgress,
  Container,
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
      <Container maxWidth="xl">
        <Typography variant="h4" marginY={2} textAlign="center">
          {meal?.strMeal}
        </Typography>
        <Box
          display="flex"
          direction={{ sm: "column", md: "row" }}
          marginTop={5}
          gap={15}
          justifyContent="space-between"
          alignItems="center"
        >
          {isLoading && <CircularProgress />}

          <Box>
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "1px 0px 8px black",
                objectFit: "contain",
              }}
            />
          </Box>

          <Stack
            direction="row"
            justifyContent="flex-start"
          >
            <List>
              {meal &&
                Object.keys(meal).map((key, index) => {
                  <ListItemText primary={meal[key]} />;
                  if (key.includes("strIngredient") && meal[key] !== "") {
                    return (
                      <ListItem key={index}>
                        <ListItemText primary={meal[key]} />
                      </ListItem>
                    );
                  }
                  return;
                })}
            </List>

            <List>
              {meal &&
                Object.keys(meal).map((key, index) => {
                  <ListItemText primary={meal[key]} />;
                  if (key.includes("strMeasure") && meal[key] !== "") {
                    return (
                      <ListItem key={index}>
                        <ListItemText secondary={meal[key]} />
                      </ListItem>
                    );
                  }
                  return;
                })}
            </List>
          </Stack>
        </Box>

        <Box>
          <Typography variant="p">{meal?.strInstructions}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Recipe;
