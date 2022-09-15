import { Form, Formik, FieldArray } from "formik";
import {
  FormInput,
  FormInputSelect,
  FormInputDate,
} from "Common/Components/FormInputs";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCreateInvoices, useGetClients } from "Common/Hooks";
import { iClient, iClientSimple } from "Common/Interfaces/iClient";
import { InvoiceItem } from "Common/Interfaces/iInvoice";

function NewInvoiceForm(props) {
  const [clients, setClients] = useState<iClientSimple[]>();
  const [clientData, setClientData] = useState<iClientSimple[]>([]);
  const createInvoice = useCreateInvoices();

  const { isLoading, refetch } = useGetClients(true, {
    refetchOnMount: true,
    onSuccess: (res: iClientSimple[]) => {
      setClients(res);
    },
  });

  useEffect(() => {
    if (clients == undefined) {
      refetch();
      return;
    }

    setClientData(clients);
  }, [clients]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        client: 0,
        date: new Date().toISOString().slice(0, 10).replace(/-/g, "/"), // Gets the current date and formats it.
        items: [{ description: "", quantity: 0, price: 0 }],
      }}
      onSubmit={(data) => {
        createInvoice.mutate(data);
      }}
    >
      <Form className="border flex flex-col rounded-md place-items-center m-3 p-3">
        <h1 className="text-4xl mb-10 underline">Create a New Invoice</h1>
        <FormInputSelect
          type="select"
          name="client"
          label="Client To Bill"
          options={clientData}
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
                  onClick={() => arrayProps.push({} as InvoiceItem)}
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
