import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Cookie from "universal-cookie";
import { Grid, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ receta }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const anadirLista = (lista) => {
    const cookie = new Cookie();
    let ingres = [];
    if (cookie.get("ingredientes")) {
      ingres = cookie.get("ingredientes");
    }

    lista.forEach((i) => {
      ingres.push({
        id: i["@id"],
        name: i.name,
      });
    });

    let noRepes = [];

    let otro = ingres.filter((obj) => {
      if (noRepes.includes(obj.id)) {
        return false;
      }
      noRepes.push(obj.id);
      return true;
    });

    setOpen(true);
    cookie.set("ingredientes", otro, { path: "/" });
  };

  // Para generar una imagen aleatoria colocamos un digito al final del string.
  const imgString =
    "https://source.unsplash.com/collection/1353633/" +
    receta["@id"].substr(receta["@id"].length - 1);
  const imgAvatar =
    "https://source.unsplash.com/collection/1718802/" +
    receta["@id"].substr(receta["@id"].length - 1);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="success"
        >
          Ingredientes añadidos correctamente!
        </Alert>
      </Snackbar>
      <Card key={receta["@id"]} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={imgAvatar}
              className={classes.large}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={receta.name}
          // subheader="September 14, 2016"
          subheader={receta.createdAtAgo}
        />
        <CardMedia
          className={classes.media}
          image={imgString}
          title={receta.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {receta.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to Lista"
            onClick={() => {
              anadirLista(receta.ingredients);
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
