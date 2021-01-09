import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(10)
  },
  buttons: {
    marginRight: theme.spacing(10)
  },
  button: {
    margin: theme.spacing(0, 4),
    color: "#000000"
  },
  logo: {
    color: "#000000"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <NavLink to="/Main" className={classes.title} style={{textDecoration: 'none'}}>
          <Typography variant="h6" className={classes.logo}>
            Branch Upgrader
          </Typography>
            </NavLink>
          <div className={classes.buttons}>
          <NavLink to="/Mentor" style={{textDecoration: 'none'}}>
            <Button color="inherit" className={classes.button}>
             Mentor
            </Button>
            </NavLink>
            <NavLink to="/Stats" style={{textDecoration: 'none'}}>
            <Button color="inherit" className={classes.button}>
              Stats
            </Button>
            </NavLink>
            <NavLink to="/Profile" style={{textDecoration: 'none'}}>
            <Button color="inherit" className={classes.button}>
              Edit Profile
            </Button>
            </NavLink>
            <NavLink to="/" style={{textDecoration: 'none'}}>
            <Button color="inherit" className={classes.button}>
              logout
            </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
