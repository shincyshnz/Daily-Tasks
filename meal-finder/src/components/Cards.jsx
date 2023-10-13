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
  easing,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../Theme/theme";
import { blue, orange } from "@mui/material/colors";

export default function Cards({ data, category }) {
  const navigate = useNavigate();

  const handleClick = (mealId) => {
    return navigate(`/recipe/${mealId}`);
  };

  const handleHover = (mealId) => {
    preFetchRecipe(mealId);
  };

  return (
      
      <Box paddingX={4} bgcolor={theme.palette.secondary[50]}>
        <Grid container spacing={4}>
          {data?.meals?.map((meal, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:"10",
                  transform:1,
                  transition: "transform 330ms ease-in-out",
                  ":hover":{
                    transform:"scale(1.03)"
                  }
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ pt: "56.25%" }}
                  image={meal.strMealThumb}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6">
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
      </Box>
  );
}
