import React from "react";
import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikYup = () => {
  const { handleChange, handleBlur, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "debe tener maximo 15")
          .required("Este requerido"),
        lastName: Yup.string()
          .max(15, "debe tener maximo 15")
          .required("Este requerido"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form action="" noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && <span> {errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email Addres</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {touched.email && <span> {errors.email}</span>}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormikYup;
