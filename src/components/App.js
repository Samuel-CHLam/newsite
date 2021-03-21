import React, { Component } from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-router-dom";
// import { Router } from "@reach/router";
import NavBar from "./modules/NavBar.js";
import Header from "./modules/Header.js"
import BottomBanner from "./modules/BottomBanner.js";

import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Teaching from "./pages/Teaching.js"
import MyStory from "./pages/MyStory.js"
import Achieve from "./pages/Achieve.js"
import Research from "./pages/Research.js"
import Publication from "./pages/Publication.js"
import Christian from "./pages/Christian.js"
import ECA from "./pages/ECA.js"
import Privacy from "./pages/Privacy.js"

import "../utilities.css";
import "./App.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    // get("/api/whoami").then((user) => {
    //   if (user._id) {
    //     // they are registed in the database, and currently logged in.
    //     this.setState({ userId: user._id });
    //   }
    // });
  }

  // handleLogin = (res) => {
  //   console.log(`Logged in as ${res.profileObj.name}`);
  //   const userToken = res.tokenObj.id_token;
  //   post("/api/login", { token: userToken }).then((user) => {
  //     this.setState({ userId: user._id });
  //   });
  // };

  // handleLogout = () => {
  //   this.setState({ userId: undefined });
  //   post("/api/logout");
  // };

  render() {
    return (
      <Router>
        <Header />
        <NavBar /> 
        {/* handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              userId={this.state.userId} */}
          {/* <Router basepath="">
            <Home path="/" />
            <Teaching path="/teaching" />
            <MyStory path="/mystory" />
            <Achieve path="/cv" />
            <Research path="/research" />
            <Publication path="/publication" />
            <Christian path="/christianity" />
            <ECA path="/eca" />
            <Privacy path="/privacy" />
            <NotFound default />
          </Router> */}
          <div>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path = "/teaching" component = {Teaching} />
            <Route exact path = "/cv" component = {Achieve} />
            <Route exact path = "/research" component = {Research} />
            <Route exact path = "/publication" component = {Publication} />
            <Route exact path = "/christian" component = {Christian} />
            <Route exact path = "/eca" component = {ECA} />
            <Route exact path = "/privacy" component = {Privacy} />
            {/* <Route exact path = "/christian" component = {NotFound} /> */}
          </Switch>
          </div>
        <BottomBanner />
      </Router>
    );
  }
}

export default App;
