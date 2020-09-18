import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(4, "You must include both your first and last name.")
    .required("You must include your full name."),
  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup.string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required"),
  terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
});
