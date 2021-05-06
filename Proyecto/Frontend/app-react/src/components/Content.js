import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

function Content() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Content;
