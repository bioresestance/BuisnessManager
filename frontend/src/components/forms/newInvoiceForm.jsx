import React from "react";
import { Form, Formik, FieldArray } from "formik";
import { FormInput, FormInputSelect } from "../forminputs";
import { useState, useEffect } from "react";
import axios from "axios";

function NewInvoiceForm(props) {
  const [clients, setClients] = useState([]);

  // On load, load the list of clients into the client state object.
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/invoice/clients").then((resp) =>
      setClients(() =>
        resp.data.map((value, index) => ({
          id: `${value.id}`,
          name: `${value.client_name}`,
        }))
      )
    );
  }, []);

  return (
    <Formik
      initialValues={{
        client: "",
        items: [{ description: "", quantity: 0, price: 0 }],
      }}
    >
      <Form className="border flex flex-col rounded-md place-items-center m-3 p-3">
        <FormInputSelect
          type="select"
          name="client"
          label="text"
          options={clients}
        />

        <FieldArray name="items">
          {(arrayProps) => {
            return (
              <div>
                {arrayProps.form.values.items.map((value, index) => {
                  return (
                    <div key={index} className="border m-2 p-3">
                      <FormInput
                        type="text"
                        name={`items.${index}.description`}
                        label="Item Description"
                      />
                      <FormInput
                        type="text"
                        name={`items.${index}.quantity`}
                        label="Quantity"
                      />
                      <FormInput
                        type="text"
                        name={`items.${index}.price`}
                        label="Price"
                      />
                      <button
                        type="button"
                        className={`btn `}
                        onClick={() => arrayProps.remove(index)}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
                {/* {console.log(arrayProps)} */}
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    arrayProps.push({ description: "", quantity: 0, price: 0 })
                  }
                >
                  New Billing Item
                </button>
              </div>
            );
          }}
        </FieldArray>

        <button type="submit" className="btn">
          {" "}
          submit
        </button>
      </Form>
    </Formik>
  );
}

export default NewInvoiceForm;
