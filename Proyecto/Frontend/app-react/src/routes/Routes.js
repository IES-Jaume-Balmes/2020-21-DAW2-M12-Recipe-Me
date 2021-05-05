import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import Main from '../pages/main';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
