import React from "react";

import useFormValidation from "../hooks/useFormValidation";
import validateAuth from "../validation/validateAuth";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function Register(props) {
  const { handleChange, values, handleSubmit } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={values.password}
          placeholder="Choose a safe password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
