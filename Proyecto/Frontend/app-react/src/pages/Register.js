import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import md5 from "md5";
import axios from "axios";

const baseUrl = "http://localhost:8000/users";

export default class Register extends Component {
  state = {
    form: {
      email: "",
      user: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  registrarse = async () => {
    let jsonPeticion = {
      email: this.state.form.email,
      username: this.state.form.user,
      password: md5(this.state.form.password)
    };
    console.log(jsonPeticion);

    await axios
      .post(baseUrl, jsonPeticion)
      .then((response) => {
        console.log(response.data);
        window.location.href="./";
      })
      .catch((error) => {
        console.log(error);
        alert("Contraseña o usuario Incorrecto");
      });
  };

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
    );
  }
}
