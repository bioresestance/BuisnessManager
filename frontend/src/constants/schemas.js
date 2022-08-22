import * as yup from "yup";

// Common US and Canada numbers
const phone_regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
const password_regex =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

// Website, with optional https
const website_regex =
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

// Schema for the new Client Form
export const newClientFormSchema = yup.object().shape({
  client_name: yup
    .string()
    .max(50, "Must be less than 50 characters")
    .required(),
  address: yup.string().required(),
  province_state: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  area_code_zip: yup.string().required(),
  phone: yup.string().matches(phone_regex).required(),
  email: yup.string().email("Please enter a valid Email"),
});
