import React from "react";
import Recetas from "../components/Recetas";
import Listas from "../components/Listas";
import Usuario from "../components/Usuario";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Body() {
  return (
    <Router>
      <Recetas />
      <Route path="/listas" component={Listas} />
      <Route path="/perfil" component={Usuario} />
    </Router>
  );
}
