import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TarjetaIngredients from "./Cards/TarjetaIngredients";
import axios from "axios";


//instalar yarn add react-select

const baseUrl = "https://localhost:8000/ingredients";
const baseUrlAdd = "https://localhost:8000/recipes";

//Array a la que le introduciremos los ingredientes y despues la cargaremos a
//state.form.ingredients.
let arrayLoadedIngredients = [];

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

  //Cambia la barra del buscador de ingredientes
  handleChangeOption = async (e) => {
    this.setState({
      form: {
        ...this.state.form,
        ingredients: e.target.value,
      },
    });
      if(this.state.form.ingredients!=0){
      arrayLoadedIngredients.push(this.state.form.ingredients);
      }
    
    console.log(arrayLoadedIngredients);
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  crearReceta = async () => {
    let jsonPeticion = {
      name: this.state.form.name,
      description: this.state.form.description,
      ingredients: arrayLoadedIngredients,
    };
    console.log(jsonPeticion);
    await axios
      .post(baseUrlAdd, jsonPeticion)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
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
            className="form-control"
            name="description"
            rows="3"
            onChange={this.handleChange}    
          ></textarea>
          <h5>Ingredientes</h5>
          <select
            name="ingredients"
            onChange={this.handleChangeOption}
            value={this.state.value}
          >
            <TarjetaIngredients ingredientsOption={this.state.ingredientsOption}/>
          </select>
          {/*<TarjetaIngredients
              onChange={this.handleChangeOption}
              ingredientsOption={this.state.ingredientsOption}
          />*/}
        </div>
        <button className="btn btn-primary" onClick={() => this.crearReceta()}>Crear Receta</button>
      </div>
    );
  }
}
