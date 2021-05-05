import React, { Component } from "react";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
  render() {
    return (
      <div className="contenedor-principal">
        <form>
          <label>Usuario</label>
          <br />
          <input type="text" className="form-control"/>
          <br/>
          <label>Contraseña</label>
          <br/>
          <input type="password" className="form-control"/>
          <br/>
          <br/>
          <button type="submit">Ingresar!</button>
        </form>
      </div>
    );
  }
}
