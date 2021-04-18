import React from "react";
import { useField } from "formik";

const MyPassword = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "password" });
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="password" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyPassword;
