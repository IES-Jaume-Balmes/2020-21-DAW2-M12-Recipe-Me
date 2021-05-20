import React from "react";
import Drawer from "../pages/Drawer";
import Listas from "../components/Listas";
import Perfil from "../components/Usuario";
import Cookie from "universal-cookie";
import Recetas from "../components/Recetas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
  if (!cookie.get("user")) {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={SignInSide} />
          <Route path="/register" component={SignUpSide} />
          <Route component={SignInSide} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <div className={classes.root}>
        <Route path="/" component={Drawer} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact component={Recetas} />
            <Route path="/recetas" component={CrearReceta} />
            <Route path="/listas" component={Listas} />
            <Route path="/perfil" component={Perfil} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
