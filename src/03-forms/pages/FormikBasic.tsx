import React from "react";
import "../styles/styles.css";
import { FormikErrors, useFormik } from "formik";
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikBasic = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    }
    return errors;
  };
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
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
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

export default FormikBasic;
