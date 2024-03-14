import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import styles from "./Filters.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  console.log("filters page" + filters);
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "var(--color-primary)" },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab label={ele.label} {...a11yProps(0)} className={styles.tab} />
        ))}
      </Tabs>
      {filters.map((ele, idx) => (
        <TabPanel value={ele.label} index={idx} />
      ))}
    </div>
  );
}
