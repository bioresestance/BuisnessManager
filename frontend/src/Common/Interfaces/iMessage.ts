enum MessageType {
    "success",
    "info",
    "warning",
    "error",
    "critical"
}


export default interface IMessage {
    message: string,
    type: MessageType
    timeout: number
}
