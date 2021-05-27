import React, { Component } from "react";
//import TarjetaIngredients from "./Cards/TarjetaIngredients";
import axios from "axios";
import Select from "react-select";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const baseUrl = "https://localhost:8000/api/ingredients";
const baseUrlAdd = "https://localhost:8000/api/recipes";

export default class CrearReceta extends Component {
  state = {
    ingredientsOption: [],
    form: {
      name: "",
      description: "",
      ingredients: [],
    },
    open: false,
  };

  async componentDidMount() {
    await axios
      .get(baseUrl)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);
          this.setState({ ingredientsOption: response.data["hydra:member"] });
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        if (error.response.data.message === "Expired JWT Token") {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        // console.log(error.config);
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
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  validateForm() {
    if (
      this.state.form.name.length > 0 &&
      this.state.form.description.length > 0 &&
      this.state.form.ingredients.length > 0
    )
      return true;
  }

  crearReceta = async () => {
    let arraySoloId = this.state.form.ingredients.map((i) => i.value);
    let jsonPeticion = {
      name: this.state.form.name,
      description: this.state.form.description,
      ingredients: arraySoloId,
    };
    console.log(jsonPeticion);
    await axios
      .post(baseUrlAdd, jsonPeticion)
      .then((response) => {
        console.log(response.data);
        this.setState({
          form: {
            name: "",
            description: "",
            ingredients: [],
          },
        });
        this.setState({ open: true });
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
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <Alert
            onClose={() => {
              this.setState({ open: false });
            }}
            severity="success"
          >
            Receta añadida correctamente!
          </Alert>
        </Snackbar>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          spacing={5}
          justify="center"
        >
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              required
              id="outlined-basic"
              variant="outlined"
              label="Nombre"
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              id="outlined-multiline-static"
              label="Descripcion"
              name="description"
              value={this.state.form.description}
              multiline
              rows={5}
              variant="outlined"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              isMulti
              name="ingredients"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Buscar Ingrediente..."
              value={this.state.form.ingredients}
              onChange={this.handleChangeOption}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.crearReceta()}
              disabled={!this.validateForm()}
            >
              Crear Receta
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
