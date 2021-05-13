import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import SignUpSide from "../pages/SignUpSide";
//import MainMaterial from "../pages/mainMaterial";
import Main from "../pages/main";
import Cookie from "universal-cookie";

const cookie = new Cookie();

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInSide} />
        <Route exact path="/register" component={SignUpSide} />
        {cookie.get("user") ? (
          //<Route exact path="/main" component={MainMaterial} />
          <Route exact path="/main" component={Main} />
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
