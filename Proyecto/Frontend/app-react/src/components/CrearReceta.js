import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import TarjetaIngredients from "./Cards/TarjetaIngredients";
import axios from "axios";
import Select from "react-select";

//instalar yarn add react-select

const baseUrl = "https://localhost:8000/ingredients";
const baseUrlAdd = "https://localhost:8000/recipes";

//Array a la que le introduciremos los ingredientes y despues la cargaremos a
//state.form.ingredients.
let arrayLoadedIngredients = [];


export default class CrearReceta extends Component {
  state = {
    ingredientsOption:[],
    form: {
      name: "",
      description: "",
      ingredients: [],
    },
  };

  
  TarjetaIngredients = ({ ingredientsOption }) => {
    //const[ingredient,setIngredients] = useState([]);
     ingredientsOption.map((ingredient) => {
      console.log(ingredient)
      return { value: ingredient["@id"], label: ingredient.name };
    });
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
        [e.target.name]: e.target.value,
      },
    });

    if (this.state.form.ingredients != 0) {
      arrayLoadedIngredients.push(this.state.form.ingredients);
    }

    //console.log(arrayLoadedIngredients);
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.ingredientsOption);
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

          <Select
            isMulti
            name="ingredients"
            options={this.TarjetaIngredients}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Buscar Ingrediente..."
          />
        </div>
        <button className="btn btn-primary" onClick={() => this.crearReceta()}>
          Crear Receta
        </button>
      </div>
    );
  }
}
