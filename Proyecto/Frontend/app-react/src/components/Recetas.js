import React, { Component } from "react";
import "../css/Recetas.css";
import RecipeCard from "./Cards/RecipeCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  gridContainer: {
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
});

class Recetas extends Component {
  state = {
    recetas: [],
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/recipes")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ recetas: data["hydra:member"] });
      })
      .catch(console.log);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={4} className={classes.gridContainer}>
        <RecipeCard recetas={this.state.recetas} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Recetas);
