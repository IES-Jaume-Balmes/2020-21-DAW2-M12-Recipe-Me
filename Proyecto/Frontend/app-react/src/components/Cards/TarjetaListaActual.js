import React from "react";
import Cookie from "universal-cookie";

export const TarjetaListaActual = () => {
  const cookie = new Cookie();
  let arrayIngres = cookie.get("ingredientes");
  if(cookie.get("ingredientes")){
    return (
        <div>
          {arrayIngres.map((ing) => {
           return <li key={ing}>{ing}</li>;
          })}
        </div>
      );
  } else {
      return <div>Añade Ingredientes A la lista de la compra!!!</div>
  }
};
