export default function Client(props) {
  return (
    <div className="border p-6 m-1 flex flex-col gap-3">
      <h1 className="place-self-center text-4xl font-bold border-b mb-4">
        {props.client_name}
      </h1>
      <div>
        <span className="font-bold text-lg pr-3">Recipient:</span>{" "}
        {props.recipient}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Address:</span> {props.address}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Province/state:</span>{" "}
        {props.province_state}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Country:</span> {props.country}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">City:</span> {props.city}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Area Code/Zip Code:</span>{" "}
        {props.area_code_zip}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Phone:</span> {props.phone}
      </div>
      <div>
        <span className="font-bold text-lg pr-3">Email:</span> {props.email}
      </div>
      <button className="btn" onClick={() => props.deleteFunction(props.id)}>
        Delete
      </button>
      <button className="btn">Edit</button>
    </div>
  );
}
