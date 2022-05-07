import React from "react";
import { Grid, Typography } from "@mui/material";
// import Grid from "@material-ui/core/Grid";
import Card from "../Cards/Card";
import ExploreBar from "../Explorebar/Explorebar";
import { Box } from "@mui/system";
const Explore = () => {
  return (
    <Box sx={{ mx: 6 }}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        align="center"
        margin={4}
      >
        <b>Explore our categories</b>
      </Typography>
      <ExploreBar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {/* <Item>xs=2</Item> */}
            <Card />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Explore;
