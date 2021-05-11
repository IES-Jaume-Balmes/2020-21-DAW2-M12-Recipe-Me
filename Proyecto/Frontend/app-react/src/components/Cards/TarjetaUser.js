import React from "react";

const TarjetaUser = ({ usuario }) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{usuario.username}</h5>
          <h5 class="card-title">{usuario.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default TarjetaUser;
