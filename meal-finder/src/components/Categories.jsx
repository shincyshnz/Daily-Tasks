import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { categoriesApi } from "../api/categoriesApi";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const Categories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesApi(),
  });

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        textAlign="center"
        color="primary"
        marginBottom="60px"
      >
        Menu that always make you feel good
      </Typography>
      {isLoading && <CircularProgress />}

      {error ? (
        <Typography>{error?.message}</Typography>
      ) : (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          {data?.categories?.map((item, index) => (
            <Link
              component={RouterLink}
              to={`/category/${item.strCategory}`}
              key={index}
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Stack
                direction="column"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={3}
              >
                <img
                  srcSet={`${item.strCategoryThumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.strCategoryThumb}?w=150&h=100&fit=crop&auto=format`}
                  alt={item.strCategory}
                  loading="lazy"
                />
                <Typography variant="h6">{item.strCategory}</Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Categories;
