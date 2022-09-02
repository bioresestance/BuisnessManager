import axios from "axios";
import { Formik, Form } from "formik";
import { FormInput } from "Components/FormInputs";
import { newClientFormSchema } from "Constants/Schemas";

export default function ClientForm() {
  return (
    <div>
      <Formik
        initialValues={{
          client_name: "",
          recipient: "",
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
          axios
            .post("http://localhost:5000/api/v1/invoice/clients", values)
            .then((resp) => console.log(resp));
        }}
      >
        <Form className="border flex flex-col rounded-md place-items-center">
          <h1>Add a new client</h1>
          <FormInput name="client_name" label="Client Name" />
          <FormInput name="recipient" label="Recipient" />
          <FormInput name="address" label="Street Address" />
          <FormInput name="province_state" label="Province / State" />
          <FormInput name="country" label="Country" />
          <FormInput name="city" label="City" />
          <FormInput name="area_code_zip" label="Area Code / Zip Code" />
          <FormInput name="phone" label="Phone Number" />
          <FormInput name="email" label="Email" />
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
