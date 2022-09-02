import { Form, Formik, FieldArray } from "formik";
import { FormInput, FormInputSelect, FormInputDate } from "Common/Components/FormInputs";
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
        date: new Date().toISOString().slice(0, 10).replace(/-/g, "/"), // Gets the current date and formats it.
        items: [{ description: "", quantity: 0, price: 0 }],
      }}
      onSubmit={(data) => {
        axios.post("http://localhost:5000/api/v1/invoice/", data);
      }}
    >
      <Form className="border flex flex-col rounded-md place-items-center m-3 p-3">
        <h1 className="text-4xl mb-10 underline">Create a New Invoice</h1>
        <FormInputSelect
          type="select"
          name="client"
          label="Client To Bill"
          options={clients}
        />

        <FormInputDate name="date" label="Invoice Date" />

        <FieldArray name="items">
          {(arrayProps) => {
            return (
              <div>
                {arrayProps.form.values.items.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="border m-2 p-3 flex flex-col place-items-center"
                    >
                      <h1 className="text-2xl font-bold mb-6">
                        Billable Item {index + 1}
                      </h1>
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
                        className={`btn ${
                          arrayProps.form.values.items.length <= 1
                            ? "btn-disabled"
                            : ""
                        }`}
                        onClick={() => arrayProps.remove(index)}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
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
