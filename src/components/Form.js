import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const [formValues, setFormvalues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
    console.log(name, value);
  };

  const validateForm = (values) => {
    const errors = [];

    if (!values.userName) {
      errors.userName = "Enter User name";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };



  return (
    <>
      {Object.keys(formErrors).lenght === 0 && isSubmit ? 
        
        (  <h1> Login Success</h1>
        )
       : (
        <>
          <h1> Form</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="userName"
            onChange={handleChange}
            value={formValues.userName}
          />
          <p>{formErrors.userName}</p>
          <input
            type="text"
            placeholder="Enter Your password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
          />
          <p> {formErrors.password}</p>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
};

export default Form;
