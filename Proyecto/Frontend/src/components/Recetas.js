import React, { Component } from "react";
import "../css/Recetas.css";
import RecipeCard from "./Cards/RecipeCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// https://www.davidhu.io/react-spinners/
import CircleLoader from "react-spinners/CircleLoader";
import { EventEmitter } from "./utils/eventEmitter";
import Cookie from "universal-cookie";
import axios from "axios";

const cookie = new Cookie();

const styles = (theme) => ({
  gridContainer: {
    // paddingTop: "30px",
    // paddingLeft: "30px",
    // paddingRight: "30px",
  },
  override: {
    // display: "block",
    // margin: 0,
    // border: "red",
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
    let token = cookie.get("token");
    const apiUrl = "https://127.0.0.1:8000/api/recipes";

    await axios
      .get(apiUrl, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ recetas: response.data["hydra:member"] });
          this.setState({ busquedaRecetas: response.data["hydra:member"] });
          this.setState({ loading: false });
        } else {
          console.log(response);
        }
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
        <Grid container spacing={4} className={classes.gridContainer}>
          {this.state.busquedaRecetas.map((element) => (
            <RecipeCard key={element["@id"]} receta={element} />
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Recetas);
