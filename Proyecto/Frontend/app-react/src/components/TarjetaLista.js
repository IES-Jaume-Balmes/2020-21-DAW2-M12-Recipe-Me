import React from "react";

const TarjetaLista = ({ listas }) => {
  return (
    <div>
      {listas.map((lista) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{lista.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{lista.createdAt}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaLista;
