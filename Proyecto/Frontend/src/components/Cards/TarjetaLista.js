import React from "react";

const TarjetaLista = ({ listas }) => {
  return (
    <div>
      {listas.map((lista) => (
        <div key={lista.name} className="card">
          <div className="card-body">
            <h5 className="card-title">{lista.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{lista.createdAt}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaLista;
