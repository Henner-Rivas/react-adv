import React, { useState } from "react";
import useForm from "../hooks/useForm";

const RegisterPage = () => {
  const {
    onChange,
    formData: registerData,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = registerData;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);
  };
  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={(event) => onSubmit(event)}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => onChange(e)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        {!isValidEmail(email) && <span>Este email no valido</span>}
        <input
          type="password"
          name="password"
          onChange={(e) => onChange(e)}
          placeholder="Password1"
          value={password}
        />
        <input
          type="password"
          name="password2"
          placeholder="Password2"
          value={password2}
          onChange={(e) => onChange(e)}
        />
        <button>Create</button>
        <button onClick={() => resetForm()}>Reset</button>
      </form>
    </div>
  );
};

export default RegisterPage;
