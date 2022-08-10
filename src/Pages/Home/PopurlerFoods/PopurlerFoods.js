import React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import PopurlerFood from "./PopurlerFood/PopurlerFood";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PopurlerFoods = () => {
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <h2>Popular Foods</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 6, md: 12 }}
        >
          {Array.from(Array(12)).map((_, index) => (
            <Grid xs={3} sm={2} md={3} key={index}>
              <PopurlerFood></PopurlerFood>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PopurlerFoods;
