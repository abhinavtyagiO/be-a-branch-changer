import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../Components/slide.css";
import ImageSlider from "./Slider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" style={{boxShadow: "none", marginTop: "2%"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // variant="fullWidth"
          centered
          aria-label="full width tabs example"
        >
          <Tab label="MAN-101" {...a11yProps(0)} />
          <Tab label="CEN-105" {...a11yProps(1)} />
          <Tab label="CYN-009" {...a11yProps(2)} />
          <Tab label="PEN-101" {...a11yProps(3)} />
          <Tab label="PEN-103" {...a11yProps(4)} />
          <Tab label="HSN-001A" {...a11yProps(5)} />
          <Tab label="HSN-001B" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className="complete">
          <h2 className="topics">Tutorials</h2> <ImageSlider /><br></br><br></br>
          <h2 className="topics">Notes</h2>
          <ImageSlider />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className="complete">
        <h2 className="topics">Will be uploaded real soon !!!</h2>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}className="complete">
        <h2 className="topics">Will be uploaded real soon !!!</h2>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
