import React, { Component } from "react";
//import TarjetaIngredients from "./Cards/TarjetaIngredients";
import axios from "axios";
import Select from "react-select";
import Cookie from "universal-cookie";

const baseUrl = "https://localhost:8000/api/ingredients";
const baseUrlAdd = "https://localhost:8000/api/recipes";
const cookie = new Cookie();
let token = cookie.get("token");

export default class CrearReceta extends Component {
  state = {
    ingredientsOption: [],
    form: {
      name: "",
      description: "",
      ingredients: [],
    },
  };

  async componentDidMount() {
    await axios
      .get(baseUrl, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ ingredientsOption: response.data["hydra:member"] });
        } else {
          console.log(response);
        }
      });
  }

  //Cambia la barra del buscador de ingredientes
  handleChangeOption = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        ingredients: e,
      },
    });
    console.log(this.state.form);
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  crearReceta = async () => {
    let arraySoloId = this.state.form.ingredients.map((i) => i.value);
    let jsonPeticion = {
      name: this.state.form.name,
      description: this.state.form.description,
      ingredients: arraySoloId,
    };
    console.log(jsonPeticion);
    await axios
      .post(baseUrlAdd, jsonPeticion, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          form: {
            name: "",
            description: "",
            ingredients: [],
          },
        });
        alert("Receta creada correctamente");
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
  };

  render() {
    let options = this.state.ingredientsOption.map(function (ingredient) {
      return { value: ingredient["@id"], label: ingredient.name };
    });

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

          <Select
            isMulti
            name="ingredients"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Buscar Ingrediente..."
            onChange={this.handleChangeOption}
          />
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => this.crearReceta()}
        >
          Crear Receta
        </button>
      </div>
    );
  }
}
