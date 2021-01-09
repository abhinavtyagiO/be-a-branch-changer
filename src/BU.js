import React, { Component } from "react";
import Signup from "./Pages/Signup.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile.js";
import Main from "./Pages/Main"

class BU extends Component {
    render() {
      return (
        <>
          {/* <Provider store={store}> */}
            <Router>
                <Navbar />
                <Switch>
                  <Route path="/" component={Signup} exact={true} />
                  <Route path="/Profile" component={Profile}/>
                  <Route path="/Main" component={Main}/>
                </Switch>
            </Router>
          {/* </Provider> */}
        </>
      );
    }
  }
  
  export default BU;