import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TarjetaIngredients from "./TarjetaIngredients";
const baseUrl = "http://localhost:8000/ingredients";




/*const getIngredientes = async () => {
    axios.get(baseUrl).then((response) => {
      console.log(response);
      console.log(response.data["hydra:member"][0].name);
  
      //pintarIngredientes(response.data['hydra:member']);
      //this.setState({ ingredients: response })
    });
  };*/

  

  

export class crearReceta extends Component {

    state = {
        ingredients: [],
      };

    componentDidMount() {
        fetch(baseUrl)
        .then(res => res.json())
        .then((data) => {
          this.setState({ ingredients: data["hydra:member"] });
        })
        .catch(console.log);
      }

  
  render() {
    return (
      <div>
        CREAR RECETA
        <div>
          <h1>Receta</h1>
          
          <input name="titulo" className="form-control my-2" />
        </div>
        <TarjetaIngredients ingredients={this.state.ingredients} />
        
      </div>
    );
  }
}

export default crearReceta;
