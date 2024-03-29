import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/Routes";
import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();
const refreshUrl = "https://localhost:8000/api/token/refresh";

export const axiosIntercepted = axios.create();

axiosIntercepted.defaults.headers.common["Authorization"] =
  "Bearer " + cookie.get("token");

axiosIntercepted.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config;

      const refreshToken = cookie.get("refresh_token");
      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const response = fetch(refreshUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            cookie.set("token", res.token, { path: "/" });
            cookie.set("refresh_token", res.refresh_token, {
              path: "/",
            });
            // console.log(originalRequest.url);
            return axiosIntercepted.get(originalRequest.url, {
              headers: {
                Authorization: "Bearer " + res.token,
              },
            });
          });
        //TODO: Catch para el caso del refresco expirado -> Logout
        resolve(response);
      }

      return Promise.reject(error);
    });
  }
);

axiosIntercepted.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config;

      const refreshToken = cookie.get("refresh_token");
      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const response = fetch(refreshUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            cookie.set("token", res.token, { path: "/" });
            cookie.set("refresh_token", res.refresh_token, {
              path: "/",
            });
            // console.log(originalRequest.url);
            return axiosIntercepted.get(originalRequest.url, {
              headers: {
                Authorization: "Bearer " + res.token,
              },
            });
          });
        //TODO: Catch para el caso del refresco expirado -> Logout
        resolve(response);
      }

      return Promise.reject(error);
    });
  }
);

ReactDOM.render(<Routes />, document.getElementById("root"));
