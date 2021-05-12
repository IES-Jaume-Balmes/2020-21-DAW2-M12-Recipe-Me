import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TarjetaIngredients from "./Cards/TarjetaIngredients";
const baseUrl = "https://localhost:8000/ingredients";

export default class CrearReceta extends Component {
  state = {
    ingredientsOption: [],
    form: {
      name: "",
      description: "",
      ingredients: [],
    },
  };

  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ingredientsOption: data["hydra:member"] });
      })
      .catch(console.log);
  }

  handleChangeOption = async (e) => {
    
    let options = e.target.options;
    
    let value =[];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }    
    }
    console.log(value);
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        
      },
    });
    
    
  }

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
      name: this.state.form.name,
      description: this.state.form.description,
      ingredients: this.state.form.ingredients,
    };
    console.log(jsonPeticion);
  };

  render() {
    return (
      <div>
        <div>
          <h1>Receta</h1>
          <h5>Nombre</h5>
          <input
            name="name"
            className="form-control my-2"
            onChange={this.handleChange}
          />
          <h5>Descripcion</h5>
          <textarea
            class="form-control"
            name="description"
            rows="3"
            onChange={this.handleChange}
          ></textarea>
          <h5>Ingredientes</h5>
          <select multiple name="ingredients" onChange={this.handleChangeOption}>
          <TarjetaIngredients
            ingredientsOption={this.state.ingredientsOption}
          />
          </select>
        </div>
        <button onClick={() => this.registrarse()}>Crear Receta</button>
      </div>
    );
  }
}
