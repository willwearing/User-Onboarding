import React, { useState } from "react";

export default function Form(props) {
  return (
    <form>
      <label htmlFor="nameInput">
        Name
        <input id="nameInput" type="name" name="name" placeholder="Full Name" />
      </label>
      <label htmlFor="emailInput">
        Email
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input
          id="passwordInput"
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>
      <button>Submit!</button>
    </form>
  );
}
