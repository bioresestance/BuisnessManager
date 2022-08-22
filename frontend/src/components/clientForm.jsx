import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, useField, Field } from "formik";
import { FormInput } from "../components/forminputs";
import { newClientFormSchema } from "../constants/schemas";

export default function ClientForm() {
  return (
    <div>
      <Formik
        initialValues={{
          client_name: "",
          address: "",
          province_state: "",
          country: "",
          city: "",
          area_code_zip: "",
          phone: "",
          email: "",
        }}
        validationSchema={newClientFormSchema}
        onSubmit={(values) => {
          //   axios
          //     .post("http://localhost:5000/api/v1/settings" + `/${item}`, values)
          //     .then((resp) => console.log(resp));
          alert(values);
        }}
      >
        <form className="border flex flex-col rounded-md">
          <h1>Add a new client</h1>
          <FormInput name="client_name" label="Client Name" />
          <FormInput name="address" label="Street Address" />
          <FormInput name="province_state" label="Province / State" />
          <FormInput name="country" label="Country" />
          <FormInput name="city" label="City" />
          <FormInput name="area_code_zip" label="Area Code / Zip Code" />
          <FormInput name="phone" label="Phone Number" />
          <FormInput name="email" label="Email" />
          <button
            type="submit"
            className="rounded bg-slate-100 inline-block w-[25%] place-self-center m-6"
          >
            Submit
          </button>
        </form>
      </Formik>
    </div>
  );
}

/*
    id = db.Column(db.Integer, primary_key=True)
    client_name = db.Column(db.String(50), unique=True, nullable=False)
    recipient = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    province_state = db.Column(db.String(30), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    area_code_zip = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(80))
*/
