import React, { useState } from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={submit}>
      <label htmlFor="nameInput">
        Name
        <input
          value={values.name}
          onChange={onChange}
          type="text"
          name="name"
          placeholder="Full Name"
        />
      </label>
      <label htmlFor="emailInput">
        Email
        <input
          value={values.email}
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input
          value={values.password}
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input
          checked={values.terms}
          onChange={onChange}
          type="checkbox"
          name="terms"
        />
      </label>
      <button disabled={disabled}>Submit!</button>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
      </div>
    </form>
  );
}
