import React from "react";
import "./styles.css";
// import { ThemeProvider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function Stats() {
  return (
    <div className="Stats">
      <Grid container>
        <Grid item xs={12} sm={6} md={6} className="img1">
          <div className="image">
            <img width="97%" src="../images/Stat2.jpeg" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="img2">
          <div className="image">
            <img width="40%" src="../images/Stat1.jpeg" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}