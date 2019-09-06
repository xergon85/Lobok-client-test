import React from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("authenticated!", values.email, values.password);
  }

  return { handleChange, values, handleSubmit };
}

export default useFormValidation;
