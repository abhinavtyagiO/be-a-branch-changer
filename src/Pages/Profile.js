import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(20)
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, tBranchName, theme) {
  return {
    fontWeight:
      tBranchName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const branches = [
  "Applied Mathematics",
  "Biotechnology",
  "Chemical Engineering",
  "Chemistry",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Electrical Engineering",
  "Electronics and Communication Engineering",
  "Engineering Physics",
  "Geological Technology",
  "Geophysical Technology",
  "Mechenical Engineering",
  "Mechenical and Industrial Engineering",
  " Metallurgical and Materials Engineering",
  "Physics",
  "Polymer Science and Engineering"
];

export default function ProfileDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const [branch, setBranch] = React.useState("");
  const [tBranchName, setTBranchName] = React.useState([]);

  const handleChange1 = (event) => {
    setTBranchName(event.target.value);
  };

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  return (
    <div><Navbar />
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      action="#"
      method="POST"
    >
      <div>
        <TextField id="filled-helperText" label="Name" variant="filled" />
        {/* <TextField
          className={classes.formControl}
          id="filled-helperText"
          label="Branch"
          variant="filled"
        />*/}
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={branch}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Applied Mathematics</MenuItem>
            <MenuItem value={2}>Biotechnology</MenuItem>
            <MenuItem value={3}>Chemical Engineering</MenuItem>
            <MenuItem value={4}>Chemistry</MenuItem>
            <MenuItem value={5}>Civil Engineering</MenuItem>
            <MenuItem value={6}>Computer Science and Engineering</MenuItem>
            <MenuItem value={7}>Electrical Engineering</MenuItem>
            <MenuItem value={8}>
              Electronics and Communication Engineering
            </MenuItem>
            <MenuItem value={9}>Engineering Physics</MenuItem>
            <MenuItem value={10}>Geological Technology</MenuItem>
            <MenuItem value={11}>Geophysical Technology</MenuItem>
            <MenuItem value={12}>Mechenical Engineering</MenuItem>
            <MenuItem value={12}>
              Mechenical and Industrial Engineering
            </MenuItem>
            <MenuItem value={14}>
              Metallurgical and Materials Engineering
            </MenuItem>
            <MenuItem value={15}>Physics</MenuItem>
            <MenuItem value={16}>Polymer Science and Engineering</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <TextField
          id="filled-helperText"
          label="Enrollment Number"
          variant="filled"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Target Branch</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={tBranchName}
            onChange={handleChange1}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {branches.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, tBranchName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <NavLink to="/Main">
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
         Submit
        </Button>
        </NavLink>
      </div>
    </form>
    </div>
  );
}
