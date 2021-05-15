import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';
import Cookie from "universal-cookie";

const cookie = new Cookie();
let arrayIngres = cookie.get("ingredientes");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TarjetaListaActual2() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const guardarListaCompra = ()=>{
    console.log(arrayIngres)
  }

  return (
    <>
    <List className={classes.root}>
      {arrayIngres.map((value,index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={index}
            role={undefined}
            dense
            button
            onClick={handleToggle(index)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value.nombre}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CancelIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <button type="button" className="btn btn-primary" onClick={()=>{guardarListaCompra()}}>Guardar Lista de la compra</button>
    </>
    
  );
}
