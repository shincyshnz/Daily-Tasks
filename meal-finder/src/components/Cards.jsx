import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../Theme/theme";

export default function Cards({ data, category }) {
  const navigate = useNavigate();

  const handleClick = (mealId) => {
    return navigate(`/recipe/${mealId}`);
  };

  const handleHover = (mealId) => {
    preFetchRecipe(mealId);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box textAlign="center" paddingY={1} bgcolor={theme.palette.primary.dark} marginBottom={2}>
        <Typography variant="h3" textAlign="center" color="white" padding={3}>
          {category} Recipes
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {data?.meals?.map((meal, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image={meal.strMealThumb}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {meal.strMeal}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleClick(meal.idMeal)}
                  onMouseEnter={() => handleHover(meal.idMeal)}
                >
                  View Recipe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
