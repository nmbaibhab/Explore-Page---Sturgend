import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.dark",
        my: 4,
        // border: 2,
        // borderRadius: 1,
        // borderColor: "grey.800",
        // backgroundColor: "info",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        fontWeight="fontWeightBold"
      >
        <Tab label="All Categories" />
        <Tab label="Trending" />
        <Tab label="Arts" />
        <Tab label="Sports" />
        <Tab label="Utilities" />
        <Tab label="Collectibles" />
        <Tab label="Music" />
      </Tabs>
    </Box>
  );
}
