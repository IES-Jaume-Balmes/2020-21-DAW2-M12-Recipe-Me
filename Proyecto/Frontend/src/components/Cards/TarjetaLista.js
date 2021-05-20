import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { List, ListItem, ListItemSecondaryAction } from "@material-ui/core";

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
    marginLeft: 10
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TarjetaLista({ lista, eliminar }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List>
          <ListItem>
            <Typography variant="h5" component="h2">
              {lista.name}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              align="center"
            >
              {lista.createdAt.split("T")[0]}
            </Typography>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={() => {eliminar(lista["@id"])}}>
                <CancelIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
