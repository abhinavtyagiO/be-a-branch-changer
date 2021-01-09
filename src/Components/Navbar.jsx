import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    margin: theme.spacing(0, 4)
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <div className={classes.buttons}>
            <Button color="inherit" className={classes.button}>
              edit profile
            </Button>
            <Button color="inherit" className={classes.button}>
              about
            </Button>
            <Button color="inherit" className={classes.button}>
              logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}