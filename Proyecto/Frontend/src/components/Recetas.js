import React, { Component } from "react";
import "../css/Recetas.css";
import RecipeCard from "./Cards/RecipeCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// https://www.davidhu.io/react-spinners/
import CircleLoader from "react-spinners/CircleLoader";

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
  state = {
    recetas: [],
    loading: true,
    color: "#3F51B6",
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/recipes")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ recetas: data["hydra:member"] });
        this.setState({ loading: false });
      })
      .catch(console.log);
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
          {this.state.recetas.map((element) => (
            <RecipeCard receta={element} />
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Recetas);
