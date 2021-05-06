import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookie from "universal-cookie";


const baseUrl = "http://localhost:8000/login";
const cookie = new Cookie();

export default class Login extends Component {
  state = {
    form: {
      email: "",
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

  iniciarSesion = async () => {
    let jsonPeticion = {
      email: this.state.form.email,
      password: this.state.form.password,
    };

    await axios
      .post(baseUrl, jsonPeticion)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response != null) {
          //response = {user: 1, username:"Frank"};
          cookie.set("user", response.user, { path: "/" });
          cookie.set("username", response.username, { path: "/" });
          window.location.href = "./main";
        } else {
          alert("El usuario o contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Contraseña o usuario Incorrecto')
      })
      //SOLO PARA TEST SIN API (BORRAR!!)
      /* .finally((response) => {
        cookie.set("user", response.user, { path: "/" });
        cookie.set("username", response.username, { path: "/" });
        window.location.href = "./main";
      }); */
  };

  registrarse = ()=>{
    window.location.href = "./register";
  }

  componentDidMount() {
    if(cookie.get('user')){
      window.location.href ="./main";
    }
  }
  

  render() {
    return (
      <div className="contenedor-principal">
        <form>
          <label>Usuario</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="email"
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
          <br />
          <button
            className="btn btn-primary"
            onClick={() => this.iniciarSesion()}
            type="button"
          >
            Ingresar!
          </button>
          <br />
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
