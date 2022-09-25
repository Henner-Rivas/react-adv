import React from "react";
import "../styles/styles.css";
import { useFormik } from "formik";
const FormikBasic = () => {
  const { handleChange, values } = useFormik({
    initialValues: {
      firstName: "22",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form action="" noValidate>
        <label htmlFor="fistName">First Name</label>
        <input
          type="text"
          name="fistName"
          value={values.firstName}
          onChange={handleChange}
        />
        <span> Fist Name resquired</span>
        <label htmlFor="fistName">Last Name</label>
        <input type="text" name="lastName" />
        <span> Last Name resquired</span>

        <label htmlFor="fistName">Email Addres</label>
        <input type="email" name="email" />
        <span> Email resquired</span>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormikBasic;
