import React from "react";
import Drawer from "../pages/Drawer";
import Listas from "../components/Listas";
import Perfil from "../components/Usuario";
import Cookie from "universal-cookie";
import Recetas from "../components/Recetas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CrearReceta from "../components/CrearReceta";
import SignInSide from "../pages/SignInSide";
import SignUpSide from "../pages/SignUpSide";


const cookie = new Cookie();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Routes() {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/register" component={SignUpSide} />
        <div className={classes.root}>
          {cookie.get("user") ? (
            <Route path="/" component={Drawer} />
          ) : (
            <Redirect to="/login" />
          )}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Router>
              <Route path="/" exact component={Recetas} />
              <Route path="/recetas" component={CrearReceta} />
              <Route path="/listas" component={Listas} />
              <Route path="/perfil" component={Perfil} />
            </Router>
          </main>
        </div>
      </Switch>
    </Router>
  );
}
