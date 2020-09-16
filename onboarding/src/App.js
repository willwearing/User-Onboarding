import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./formSchema";
import "./App.css";

// const inputChange = (name, value) => {
//   validate(name, value);
//   setFormValues({
//     ...formValues,
//     [name]: value,
//   });
// };

const formSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  role: "",
  civil: "",
};

const initalUserData = [];

const initialDisabled = true;

function App() {
  const [userData, setUserData] = useState(initalUserData);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div className="App">
      <Form
        values={formValues}
        // change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
