import React, { useEffect } from "react";
import Login from "./components/login";
import { withRouter } from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withRouter(App);
