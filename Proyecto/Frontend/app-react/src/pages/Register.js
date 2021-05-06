import React, { Component } from 'react';
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Register extends Component {
    render() {
        return (
            <div className="contenedor-principal">
        <form>
        <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <label>Usuario</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="user"
            onChange={this.handleChange}
          />
          <br />
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <label>Repetir Contraseña</label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password2"
            onChange={this.handleChange}
          />
          <br />
          <button
            className="btn btn-success"
            onClick={() => this.registrarse()}
            type="button"
          >
            Registrate!
          </button>
        </form>
      </div>
        )
    }
}
