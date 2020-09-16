import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./formSchema";
import "./App.css";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initalUserData = [];

const initialDisabled = true;

function App() {
  const [userData, setUserData] = useState(initalUserData);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [post, setPost] = useState([]);

  const validate = (name, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(formSchema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        // eslint-disable-line
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    validate(name, value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formValues)
      .then((res) => {
        setPost(res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export default App;
