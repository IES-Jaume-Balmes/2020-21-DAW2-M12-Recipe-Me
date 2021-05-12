import React from "react";

const TarjetaUser = ({ usuario }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{usuario.username}</h5>
          <h5 className="card-title">{usuario.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default TarjetaUser;
