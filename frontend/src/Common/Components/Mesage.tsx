import IMessage from "Common/Interfaces/iMessage";
import { useEffect } from "react";

interface IMessageProps extends IMessage {
  id: number;
  close(id: number): void;
}

export default function Message(props: IMessageProps) {
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
        x
      </button>
    </div>
  );
}
