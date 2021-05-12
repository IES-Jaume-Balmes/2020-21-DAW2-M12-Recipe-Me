import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignInSide from "../pages/SignInSide";
import Main from "../pages/main";
import Register from "../pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route exact path="/" component={SignInSide} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
