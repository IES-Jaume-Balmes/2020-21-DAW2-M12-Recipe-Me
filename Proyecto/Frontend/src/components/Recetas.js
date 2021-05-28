import React, { Component } from "react";
import "../css/Recetas.css";
import RecipeCard from "./Cards/RecipeCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CircleLoader from "react-spinners/CircleLoader";
import { EventEmitter } from "./utils/eventEmitter";
import { axiosIntercepted } from "../index";

const styles = (theme) => ({
  override: {
    height: "100vh" /* Magic here */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

class Recetas extends Component {
  constructor() {
    super();
    this.state = {
      recetas: [],
      busquedaRecetas: [],
      loading: true,
      color: "#3F51B6",
    };
  }

  mapearBusqueda(palabraABuscar) {
    let nuevoRecetas = this.state.recetas.filter((elemento) => {
      return elemento.name.toLowerCase().includes(palabraABuscar);
    });
    this.setState({ busquedaRecetas: nuevoRecetas });
  }

  async componentDidMount() {
    // let token = cookie.get("token");
    const apiUrl = "https://127.0.0.1:8000/api/recipes";

    await axiosIntercepted
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        this.setState({ recetas: response.data["hydra:member"] });
        this.setState({ busquedaRecetas: response.data["hydra:member"] });
        this.setState({ loading: false });
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
    EventEmitter.subscribe("buscar", (event) => {
      this.mapearBusqueda(event);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={3}>
            <CircleLoader
              color={this.state.color}
              loading={this.state.loading}
              className={classes.override}
              size={80}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {this.state.busquedaRecetas.map((element) => (
            <RecipeCard key={element["@id"]} receta={element} />
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Recetas);
