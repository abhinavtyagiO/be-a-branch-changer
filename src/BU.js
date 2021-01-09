import React, { Component } from "react";
import Signup from "./Pages/Signup.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile.js";
import Main from "./Pages/Main";
import Stats from "./Pages/Stats";
import Mentors from "./Pages/Mentors";
import Login from "./Pages/Login"

class BU extends Component {
    render() {
      return (
        <>
          {/* <Provider store={store}> */}
            <Router>
                <Navbar />
                <Switch>
                  <Route path="/" component={Login} exact={true} />
                  <Route path="/Signup" component={Signup} exact={true} />
                  <Route path="/Profile" component={Profile}/>
                  <Route path="/Main" component={Main}/>
                  <Route path="/Stats" component={Stats}/>
                  <Route path="/Mentors" component={Mentors}/>
                </Switch>
            </Router>
          {/* </Provider> */}
        </>
      );
    }
  }
  
  export default BU;