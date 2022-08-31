import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Message(props) {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.close(props.id);
  //     }, 5000);
  //   }, []);

  return (
    <div
      className={`alert alert-${props.type} shadow-lg my-4 place-self-center w-[95%]`}
    >
      <p>{props.message}</p>
      <button className="btn" onClick={() => props.close(props.id)}>
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
}
