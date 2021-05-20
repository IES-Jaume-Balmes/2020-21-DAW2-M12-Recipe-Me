import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";

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

  // Para generar una imagen aleatoria colocamos un digito al final del string.
  const imgString = "https://source.unsplash.com/collection/1718802/";

  //const imgFood = "https://source.unsplash.com/collection/1353633/";

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
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default TarjetaUser;
