import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import Principal from '../pages/Principal';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
