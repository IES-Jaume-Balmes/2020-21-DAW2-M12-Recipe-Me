import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const imgString = "";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
    backgroundImage: "url(" + imgString + ")",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TarjetaLista({ lista }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {lista.createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
          {lista.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
