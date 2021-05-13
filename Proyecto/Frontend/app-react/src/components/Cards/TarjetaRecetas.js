import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const TarjetaRecetas = ({ recetas }) => {
  return (
    <>
      {recetas.map((receta) => (
        <Card className="card">
          <CardMedia />
          <CardContent className="card-body">
            <Typography component="p" variant="h6">
              {receta.name}
            </Typography>
            <h6 className="card-subtitle mb-2 text-muted">
              {receta.description}
            </h6>
            <ul>
              {receta.ingredients.map((ingre) => {
                return <li>{ingre.name}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default withStyles({
  item: {
    minWidth: "300px",
    margin: "1em",
    boxSizing: "border-box",
  },
  media: {
    minHeight: "150px",
  },
})(TarjetaRecetas);
