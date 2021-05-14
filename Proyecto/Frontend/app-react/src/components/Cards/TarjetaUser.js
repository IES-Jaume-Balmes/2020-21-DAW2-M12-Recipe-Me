import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Cookie from "universal-cookie";
import { Grid } from "@material-ui/core";

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

const TarjetaUser = ({ usuario }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const anadirLista = (lista) => {
    const cookie = new Cookie();
    let ingres = [];
    if (cookie.get("ingredientes")) {
      ingres = cookie.get("ingredientes");
    }

    lista.forEach((i) => {
      ingres.push({
        id: i["@id"],
        nombre: i.name,
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

    cookie.set("ingredientes", otro, { path: "/" });
    console.log(cookie.get("ingredientes"));
  };

  // Para generar una imagen aleatoria colocamos un digito al final del string.
  const imgString = "https://source.unsplash.com/collection/1718802/";

  const imgFood = "https://source.unsplash.com/collection/1353633/";

  return (
    <Card key={usuario.username} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={imgString} className={classes.large} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={usuario.username}
        subheader={usuario.email}
      />
      <CardMedia
        className={classes.media}
        image={imgString}
        title={usuario.email}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {usuario.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TarjetaUser;
