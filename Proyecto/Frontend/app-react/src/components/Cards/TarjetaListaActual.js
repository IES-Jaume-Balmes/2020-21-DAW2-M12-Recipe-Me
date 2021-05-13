import React from "react";
import Cookie from "universal-cookie";

export const TarjetaListaActual = () => {
  const cookie = new Cookie();
  let arrayIngres = cookie.get("ingredientes");

  const guardarListaCompra = ()=>{
    console.log("Receta guardada")
  }

  if (cookie.get("ingredientes")) {
    return (
      <>
        <div>
          {arrayIngres.map((ing) => {
            return <li key={ing.id}>{ing.nombre}</li>;
          })}
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{guardarListaCompra()}}>Guardar Lista de la compra</button>
      </>
    );
  } else {
    return <div>Añade Ingredientes A la lista de la compra!!!</div>;
  }
};
