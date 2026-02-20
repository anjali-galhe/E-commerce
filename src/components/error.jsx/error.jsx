import React from "react";
import { ErrorMessage } from "formik";
import './error.css'

const FormError = ({ name, }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <div className="error">{msg}</div>}
    </ErrorMessage>
  );
};

export default FormError;