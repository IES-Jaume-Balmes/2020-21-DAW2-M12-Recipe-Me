import React, { Component } from "react";
import "../css/main.css";
import Sidebar from "../components/sidebar";
import Recetas from "../components/Recetas";
import CrearReceta from "../components/crearReceta";
import Listas from "../components/Listas";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default class Main extends Component {
  cerrarSesion = () => {
    cookie.remove("user", { path: "/" });
    cookie.remove("username", { path: "/" });

    window.location.href = "./";
  };

  componentDidMount() {
    if (!cookie.get("user")) {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div>
            <Switch>
              <Route path="/home" exact>
                <Recetas />
              </Route>
              <Route path="/listas" exact>
                <Listas />
              </Route>
              <Route path="/crearReceta" exact>
                <CrearReceta />
              </Route>
            </Switch>
          </div>
          <div>
            <button
              className="buttonLogout"
              onClick={() => this.cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </Router>
    );
  }
}
