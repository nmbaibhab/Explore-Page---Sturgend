import React from "react";
// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

// const styles = {
//   card: {
//     display: "flex",
//     marginBottom: 20,
//   },
//   image: {
//     minWidth: 100,
//     minHeight: 100,
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
//   content: {
//     objectFit: "cover",
//   },
// };

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 350 }} display="flex">
      <CardMedia
        component="img"
        height="120"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      {/* <CardMedia
        component="img"
        height="30"
        //   width="30"
        // minWidth="30"
        // minHeight="30"
        borderRadius="50%"
        image="https://source.unsplash.com/random"
        alt="green iguana"
        align="center"
        // className={styles.image}
      /> */}
      <Box
        sx={{ m: -6 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://source.unsplash.com/1600x900/?profile,icon"
          sx={{ width: 100, height: 100 }}
          spacing={0}
          align="center"
          justify="center"
          variant="outlined"
        />
      </Box>
      <CardContent sx={{ mt: 5 }}>
        <Typography gutterBottom variant="h6" component="div" align="center">
          <b>COLLECTION NAME</b>
        </Typography>
        <Typography gutterBottom variant="text" component="div" align="center">
          By: <span style={{ color: "blue" }}>Collector Name</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi libero
          dolorum sint Quasi libero dolorum sint
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default Cards;
