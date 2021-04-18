import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../constants/MyTextInput";
import MyPassword from "../constants/MyPassword";

const SignupForm = () => {
  const botonRegistrate = () => {
    window.location = "https://github.com/FrankPalomino/proyectoFinal";
  };

  return (
    <Fragment>
      <h1>Loggin!</h1>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        validationSchema={Yup.object({
          user: Yup.string().required("Introduce tu usuario."),
          password: Yup.string().required("Introduce la contraseña."),
        })}
        onSubmit={(values) => {
          console.log(values);
          window.location =
            "https://www.divinacocina.es/Categorias/recetas-de-la-abuela/";
        }}
      >
        <Form>
          <MyTextInput
            label="Usuario"
            name="user"
            type="text"
            placeholder="Usuario"
          />

          <MyPassword
            label="Contraseña"
            name="password"
            type="password"
            placeholder="password"
          />

          <button type="submit" className="btn btn-primary">
            Inicia la sesión
          </button>
        </Form>
      </Formik>
      <button className="btn btn-success" onClick={botonRegistrate}>
        Registrate
      </button>
    </Fragment>
  );
};

export default SignupForm;
