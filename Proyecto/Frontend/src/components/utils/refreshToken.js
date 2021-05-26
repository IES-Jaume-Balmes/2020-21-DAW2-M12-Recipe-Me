import Cookie from "universal-cookie";
import axios from "axios";
const cookie = new Cookie();
const refreshUrl = "https://localhost:8000/api/token/refresh";

const RefreshToken = async () => {
  let refresh_token = cookie.get("refresh_token");
  let jsonPeticion = {
    refresh_token: refresh_token,
  };
  await axios
    .post(refreshUrl, jsonPeticion)

    .then((response) => {
      cookie.set("token", response.data.token, { path: "/" });
      cookie.set("refresh_token", response.data.refresh_token, {
        path: "/",
      });
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        // "Si el token de refresco falla redirigimos a login y borramos cookies";
        cookie.remove("ingredientes", { path: "/" });
        cookie.remove("token", { path: "/" });
        cookie.remove("refresh_token", { path: "/" });
        window.location.href = "./login";
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      // console.log(error.config);
    });
};

export { RefreshToken };
